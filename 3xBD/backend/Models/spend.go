package models

import (
	"encoding/json"
	"time"

	"gorm.io/gorm"
)

type Spend struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	Name        string         `json:"name"`
	Description string         `json: "description"`
	Price       json.Number    `json: "price,omitempty"`
	TypeSpend   int            `json:"type_spend" binding:"omitempty,oneof=0 1 2"`
	CreatedAt   time.Time      `json:"created"`
	UpdatedAt   time.Time      `json:"updated"`
	DeletedAt   gorm.DeletedAt `gorm:"index" json:"deleted"`
	UserID      int            `json: "UserId, binding:"omitempty"`
	User        User           `gorm:"foreignKey:UserId`
}
