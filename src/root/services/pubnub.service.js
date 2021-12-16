import PubNub from "pubnub";

export const connect = ({ dispatch }) => {
  const pubnub = new PubNub({
    publishKey: "pub-c-5ccb95cf-8344-4094-bfe4-3ed29f5ae888",
    restore: true,
    subscribeKey: "sub-c-dd15afc2-112e-11e6-a6dc-02ee2ddab7fe",
    // This should be the same as the alerter UUID from the server!
    uuid: "f9b87640-d818-46e2-a0db-dc8f90fe720a",
  });

  pubnub.addListener({
    message: (message) => {
      dispatch("alert", message);
    },
    status: (event) => {
      console.log(event);
    },
  });

  pubnub.subscribe({
    channels: ["user-5b15474a3624d2001bb0b5b4"],
  });

  console.log("should be connected to PubNub now");
};
