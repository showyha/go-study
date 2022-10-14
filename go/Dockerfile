FROM golang:1.17

ARG WORKDIR=/var/www/go

RUN apt-get update && apt-get install -y \
  git \
  autoconf \
  automake \
  libtool \
  && go install -v \
      golang.org/x/tools/gopls@latest \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /tmp

ARG PROTOBUF_VERSION=3.20.1
ENV LD_LIBRARY_PATH=/usr/local/lib

RUN set -eux && \
  curl -L -o /tmp/protobuf.tar.gz \
  "https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/protobuf-cpp-${PROTOBUF_VERSION}.tar.gz" && \
  tar xvzf /tmp/protobuf.tar.gz --no-same-owner && \
  cd "/tmp/protobuf-${PROTOBUF_VERSION}" && \
  ./autogen.sh && \
  ./configure && \
  make && \
  make install && \
  rm -f /tmp/protobuf.tar.gz

RUN go install -v google.golang.org/protobuf/cmd/protoc-gen-go@v1.26 && \
  go install -v google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1

RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | \
  sh -s -- -b $(go env GOPATH)/bin

RUN go install -tags 'mysql' github.com/golang-migrate/migrate/v4/cmd/migrate@latest

ENV LANG=C.UTF-8 TZ=Asia/Tokyo

RUN mkdir -p $WORKDIR

WORKDIR $WORKDIR

VOLUME ["$WORKDIR"]

CMD ["/bin/bash"]
