/**
 * Created by Benson on 2017/9/1.
 */


//const host = 'http://www.9jck.com:8099/';
const host = 'http://192.168.1.122:8080';

export const getslzb = function () {
  const URL = '/userManager/getHealthDateJsonByUctomerId';
  const API = host + URL;
  return API;
};
export const uploadHealthData = function () {
  const URL = '/userManager/uploadHealthData';
  const API = host + URL;
  return API;
};
export const getCustomerMessage = function () {
  const URL = '/userManager/getCustomerMessage';
  const API = host + URL;
  return API;
};
export const updateUserMessage = function () {
  const URL = '/userManager/updateUserMessage';
  const API = host + URL;
  return API;
};
export const getCustomerByIdNumber = function () {
  const URL = '/userManager/getCustomerByIdNumber';
  const API = host + URL;
  return API;
};
export const insertReservationService = function () {
  const URL = '/reservationService/insertReservationService';
  const API = host + URL;
  return API;
};
export const createConsultation = function () {
  const URL = '/consultation/createConsultation';
  const API = host + URL;
  return API;
};
export const getConsultationList = function () {
  const URL = '/consultation/getConsultationList';
  const API = host + URL;
  return API;
};
export const getHealthConsultationDetail = function () {
  const URL = '/consultation/getHealthConsultationDetail';
  const API = host + URL;
  return API;
};
export const getGoodsList = function () {
  const URL = '/teamUser/getGoodsList';
  const API = host + URL;
  return API;
};
export const getCheckReportsByCustomer = function () {
  const URL = '/checkReport/getCheckReportsByCustomer';
  const API = host + URL;
  return API;
};
export const getReportDetailByReportId = function () {
  const URL = '/checkReport/getReportDetailByReportId';
  const API = host + URL;
  return API;
};
export const updateCustomerIcon = function () {
  const URL = '/userManager/updateCustomerIcon';
  const API = host + URL;
  return API;
};
export const getReservationList = function () {
  const URL = '/reservationService/getReservationList';
  const API = host + URL;
  return API;
};
export const updateReservationStatus = function () {
  const URL = '/reservationService/updateReservationStatus';
  const API = host + URL;
  return API;
};
export const getGroupGoodsList = function () {
  const URL = '/customerPayGoods/getGroupGoodsList';
  const API = host + URL;
  return API;
};
export const replyConsultation = function () {
  const URL = '/consultation/replyConsultation';
  const API = host + URL;
  return API;
};
