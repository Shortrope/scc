DROP TABLE IF EXISTS `scc_db`.`subscribers`;
CREATE TABLE IF NOT EXISTS `scc_db`.`subscribers` (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `scc_db`.`messages`;
CREATE TABLE IF NOT EXISTS `scc_db`.`messages` (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    subscriber_id INT UNSIGNED NOT NULL,
    date DATETIME NOT NULL,
    subject VARCHAR(50) NULL,
    message TEXT NULL,
    json TEXT NOT NULL,
    PRIMARY KEY (id),
    INDEX (subscriber_id)
);

DROP TABLE IF EXISTS `scc_db`.`json_objects`;
