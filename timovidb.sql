CREATE TABLE `timovi` (
	`ime`	TEXT NOT NULL UNIQUE,
	`team_uuid`	TEXT NOT NULL UNIQUE,
	`description`	TEXT,
	PRIMARY KEY(`ime`)
);