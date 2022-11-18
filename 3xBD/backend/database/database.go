package database

import (
	"bdx3/database/migrations"
	"log"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

func OpenDatabase() {
	initialDatabase := "host=localhost port=5432 user=bdx3 dbname=bdx3 sslmode=disable password=bdx3"

	database, err := gorm.Open(postgres.Open(initialDatabase), &gorm.Config{})

	if err != nil {
		log.Fatal("error: ", err)
	}

	db = database

	config, _ := db.DB()

	config.SetMaxIdleConns(10)
	config.SetMaxOpenConns(100)
	config.SetConnMaxLifetime(time.Hour)

	migrations.RunMigrations(db)

}

func GetDatabase() *gorm.DB {
	return db
}
