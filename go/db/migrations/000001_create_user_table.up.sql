CREATE TABLE users (
  id bigint NOT NULL AUTO_INCREMENT,
  name varchar(191) NOT NULL,
  birthday datetime NOT NULL,
  created_at datetime NOT NULL default current_timestamp,
  updated_at datetime NOT NULL default current_timestamp on update current_timestamp,
  PRIMARY KEY (id)
) ENGINE=InnoDB CHARSET=utf8mb4;
