/*
 Navicat MySQL Data Transfer

 Source Server         : one
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : 127.0.0.1:3306
 Source Schema         : node_store

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 26/11/2018 15:11:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for websites
-- ----------------------------
DROP TABLE IF EXISTS `websites`;
CREATE TABLE `websites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL DEFAULT '' COMMENT '站点名称',
  `url` varchar(255) NOT NULL DEFAULT '',
  `alexa` int(11) NOT NULL DEFAULT '0' COMMENT 'Alexa 排名',
  `country` char(10) NOT NULL DEFAULT '' COMMENT '国家',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of websites
-- ----------------------------
BEGIN;
INSERT INTO `websites` VALUES (1, 'Google', 'https://www.google.cm/', 1, 'USA');
INSERT INTO `websites` VALUES (2, 'tengx', 'www.tencent.com', 20, 'CN');
INSERT INTO `websites` VALUES (4, 'Facebook', 'https://www.facebook.com/', 3, 'USA');
INSERT INTO `websites` VALUES (5, 'tengx', 'www.tencent.com', 13, 'CN');
INSERT INTO `websites` VALUES (10, 'tengx', 'www.tencent.com', 0, 'USA');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
