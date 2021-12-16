import { connect } from "../../root/services/pubnub.service";

export const connectToPubNub = ({ dispatch }) => {
  connect({ dispatch });
};

export const alert = (context, payload) => {
  const caseID = payload.message.payload.caseId;

  const data = { ...payload };

  const url = `http://localhost:3000/alert?caseID=${caseID}`;

  window.open(url, caseID, "height=500,width=800");

  localStorage.setItem(caseID, JSON.stringify(data));
};
