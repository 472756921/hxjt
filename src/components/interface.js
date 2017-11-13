/**
 * Created by Benson on 2017/9/1.
 */


//const host = 'http://118.31.38.185/hrt';
const host = 'http://www.schrtinfo.com/hrt';
//const host = 'http://192.168.0.5:8080/hrt';

export const saveSession = function () {
  const URL = '/admin/saveSession?group_id=1';
  const API = host + URL;
  return API;
};

export const jumpPage = function () {
  const URL = '/teamUser/jumpPage';
  const API = host + URL;
  return API;
};
export const getslzb = function () {
  const URL = '/teamUser/getHealthDateJsonByUctomerId';
  const API = host + URL;
  return API;
};
export const userLogin = function () {
  const URL = '/teamUser/doctorLogin ';
  const API = host + URL;
  return API;
};
export const uploadHealthData = function () {
  const URL = '/teamUser/uploadHealthData';
  const API = host + URL;
  return API;
};
export const getGroupCustomerMessage = function () {
  const URL = '/teamUser/getGroupCustomerMessage';
  const API = host + URL;
  return API;
};
export const CustomerPayHealthServicePackage = function () {
  const URL = '/healthServiceManager/CustomerPayHealthServicePackage';
  const API = host + URL;
  return API;
};
export const customerPayMedicalGoods = function () {
  const URL = '/medicalGoods/customerPayMedicalGoods';
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
export const customerGetReservationList = function () {
  const URL = '/reservationService/customerGetReservationList';
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
export const getCustomerServiceDetailCount = function () {
  const URL = '/teamUser/getCustomerServiceDetailCount';
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
export const getGroupBindPackageByPage = function () {
  const URL = '/healthServiceManager/getGroupBindPackageByPage';
  const API = host + URL;
  return API;
};
export const getGroupMedicalGoods = function () {
  const URL = '/medicalGoods/getGroupMedicalGoods';
  const API = host + URL;
  return API;
};
export const customerBindGroup = function () {
  const URL = '/teamUser/customerBindGroup';
  const API = host + URL;
  return API;
};
export const getCheckReportListByPage = function () {
  const URL = '/checkReport/getCheckReportListByPage';
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
export const saveCheckReport = function () {
  const URL = '/checkReport/saveCheckReport';
  const API = host + URL;
  return API;
};
export const getGroupCustomers = function () {
  const URL = '/teamUser/getGroupCustomers';
  const API = host + URL;
  return API;
};
export const reservationBack = function () {
  const URL = '/reservationService/reservationBack';
  const API = host + URL;
  return API;
};
export const getHealthPackageByPage = function () {
  const URL = '/healthServiceManager/getHealthPackageByPage';
  const API = host + URL;
  return API;
};
export const getMedicalGoodsByPage = function () {
  const URL = '/medicalGoods/getMedicalGoodsByPage';
  const API = host + URL;
  return API;
};
export const getHealthServiceOrder = function () {
  const URL = '/healthServiceManager/getHealthServiceOrder';
  const API = host + URL;
  return API;
};
export const customerGetMedicalOrder = function () {
  const URL = '/medicalGoods/customerGetMedicalOrder';
  const API = host + URL;
  return API;
};
export const GroupBindPackage = function () {
  const URL = '/healthServiceManager/GroupBindPackage';
  const API = host + URL;
  return API;
};
export const updateGroupBindPackageStatus = function () {
  const URL = '/healthServiceManager/updateGroupBindPackageStatus';
  const API = host + URL;
  return API;
};
export const groupBindMedicalGoods = function () {
  const URL = '/medicalGoods/groupBindMedicalGoods';
  const API = host + URL;
  return API;
};
export const updateGroupMedicalGoodsStatus = function () {
  const URL = '/medicalGoods/updateGroupMedicalGoodsStatus';
  const API = host + URL;
  return API;
};
export const getCustomerCheckReportDetail = function () {
  const URL = '/checkReport/getCustomerCheckReportDetail';
  const API = host + URL;
  return API;
};
export const updatetMedicalGoodsOrderStatus = function () {
  const URL = '/medicalGoods/updatetMedicalGoodsOrderStatus';
  const API = host + URL;
  return API;
};


//集团
export const getGroups = function () {
  const URL = '/teamUser/getGroups';
  const API = host + URL;
  return API;
};
export const registerCustomer = function () {
  const URL = '/userManager/registerCustomer';
  const API = host + URL;
  return API;
};
export const getCustomerMessage = function () {
  const URL = '/userManager/getCustomerMessage';
  const API = host + URL;
  return API;
};
export const customerGetEnterpriseMedicalOrder = function () {
  const URL = '/medicalGoods/customerGetEnterpriseMedicalOrder';
  const API = host + URL;
  return API;
};
export const getCustomerGroups = function () {
  const URL = '/userManager/getCustomerGroups';
  const API = host + URL;
  return API;
};
export const customerGetMedicalGoods = function () {
  const URL = '/medicalGoods/customerGetMedicalGoods';
  const API = host + URL;
  return API;
};
export const admingetCustomers = function () {
  const URL = '/admin/admingetCustomers';
  const API = host + URL;
  return API;
};
export const updateGroupStatus = function () {
  const URL = '/teamUser/updateGroupStatus';
  const API = host + URL;
  return API;
};
export const getGroupDetail = function () {
  const URL = '/teamUser/getGroupDetail';
  const API = host + URL;
  return API;
};
export const createGroup = function () {
  const URL = '/teamUser/createGroup';
  const API = host + URL;
  return API;
};
export const adminLogin = function () {
  const URL = '/admin/adminLogin';
  const API = host + URL;
  return API;
};
export const getServiceGoods = function () {
  const URL = '/healthServiceManager/getServiceGoods';
  const API = host + URL;
  return API;
};
export const createHealthPackage = function () {
  const URL = '/healthServiceManager/createHealthPackage';
  const API = host + URL;
  return API;
};
export const adminGetMedicalGoodsByPage = function () {
  const URL = '/medicalGoods/adminGetMedicalGoodsByPage';
  const API = host + URL;
  return API;
};
export const adminGetHealthPackageByPage = function () {
  const URL = '/healthServiceManager/adminGetHealthPackageByPage';
  const API = host + URL;
  return API;
};
export const createMedicalGoods = function () {
  const URL = '/medicalGoods/createMedicalGoods';
  const API = host + URL;
  return API;
};
export const updateMedicalGoodsStatus = function () {
  const URL = '/medicalGoods/updateMedicalGoodsStatus';
  const API = host + URL;
  return API;
};
export const recharge = function () {
  const URL = '/userManager/recharge';
  const API = host + URL;
  return API;
};
export const getRechargeByPage = function () {
  const URL = '/userManager/getRechargeByPage';
  const API = host + URL;
  return API;
};
