package models

import (
	"encoding/json"
	"time"

	"gorm.io/gorm"
)

type Performance struct {
	ID           uint           `json:"id" gorm:"primaryKey"`
	EarnedIncome json.Number    `json:"earned_income"`
	Description  string         `json: "description"`
	TypeIncome   json.Number    `json: "type_income"`
	CreatedAt    time.Time      `json:"created"`
	UpdatedAt    time.Time      `json:"updated"`
	DeletedAt    gorm.DeletedAt `gorm:"index" json:"deleted"`
	UserID       int            `json: "UserId, binding:"omitempty"`
	User         User           `gorm:"foreignKey:UserId`
}
