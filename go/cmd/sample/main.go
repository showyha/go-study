// エントリポイントのパッケージ名はmain
package main

import (
	"context"
	"log"
	"net"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/yumenosora/tora-lab-learning/api/grpc-gen/samplepb"
	"google.golang.org/grpc"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type User struct {
	ID        uint32 `gorm:"primarykey"`
	Name      string
	Birthday  time.Time
	CreatedAt time.Time
	UpdatedAt time.Time
}

// grpcにより自動生成されるinterfaceを実装する構造体
type sampleServer struct {
	samplepb.UnimplementedSampleServer
}

func (s *sampleServer) GetUsers(ctx context.Context, req *samplepb.UserSearchRequest) (*samplepb.UsersResponse, error) {
	// TODO: DBからユーザー情報取得
	users := []*samplepb.User{}
	users = append(users, &samplepb.User{
		Id:       1,
		Name:     "サンプル1",
		Birthday: time.Now().Format(time.RFC3339),
	})
	users = append(users, &samplepb.User{
		Id:       2,
		Name:     "サンプル2",
		Birthday: time.Now().Format(time.RFC3339),
	})

	return &samplepb.UsersResponse{Users: users}, nil
}

func (s *sampleServer) CreateUser(ctx context.Context, req *samplepb.NewUser) (*samplepb.User, error) {
	// TODO: DBへユーザー登録
	user := samplepb.User{Name: req.Name, Birthday: req.Birthday}

	return &user, nil
}

func (s *sampleServer) DeleteUser(ctx context.Context, req *samplepb.DeleteRequest) (*samplepb.DeleteResponse, error) {
	// TODO: DBからユーザー削除
	return &samplepb.DeleteResponse{Success: false}, nil
}

var db *gorm.DB

func closeDB() {
	db, err := db.DB()

	if err != nil {
		panic(err)
	}

	if err := db.Close(); err != nil {
		panic(err)
	}
}

func main() {
	dsn := os.Getenv("MYSQL_DSN")
	var err error
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("データベースへのアクセスに失敗しました。")
	}
	defer closeDB()

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	samplepb.RegisterSampleServer(grpcServer, &sampleServer{})
	log.Printf("server listening at %v", lis.Addr())
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
