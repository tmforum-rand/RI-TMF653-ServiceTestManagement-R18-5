'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceTestAttributeValueChangeNotification = function listenToServiceTestAttributeValueChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceTestAttributeValueChangeNotification(req, res, next);
};

module.exports.listenToServiceTestCreateNotification = function listenToServiceTestCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceTestCreateNotification(req, res, next);
};

module.exports.listenToServiceTestDeleteNotification = function listenToServiceTestDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceTestDeleteNotification(req, res, next);
};

module.exports.listenToServiceTestSpecificationAttributeValueChangeNotification = function listenToServiceTestSpecificationAttributeValueChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceTestSpecificationAttributeValueChangeNotification(req, res, next);
};

module.exports.listenToServiceTestSpecificationCreateNotification = function listenToServiceTestSpecificationCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceTestSpecificationCreateNotification(req, res, next);
};

module.exports.listenToServiceTestSpecificationDeleteNotification = function listenToServiceTestSpecificationDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceTestSpecificationDeleteNotification(req, res, next);
};
