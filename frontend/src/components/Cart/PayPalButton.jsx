import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onError, onSuccess }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ASWMSHGjtmW_cjMO6Sc2NmvDFGxobc5ejDooRo6163woKyF5UVgpQFHx_OZbJY2f33i8HiWwJ9-9r0mR",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};
export default PayPalButton;
