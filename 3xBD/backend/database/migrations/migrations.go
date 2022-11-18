package migrations

import (
	models "bdx3/Models"

	"gorm.io/gorm"
)

func RunMigrations(db *gorm.DB) {
	db.AutoMigrate(models.User{})
	db.AutoMigrate(models.Spend{})
	db.AutoMigrate(models.Performance{})
}
