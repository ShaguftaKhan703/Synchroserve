console.log("Order Placed");
function OrderProcessed(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order processed: " + orderId);
    }, 1000);
    resolve();
  });
}
function OrderShipped() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Shipped!");
    }, 2000);
    resolve();
  });
}
function OrderDeliver() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Delivered! ");
    }, 3000);
    resolve();
  });
}
async function processOrder(orderId) {
  try {
    await OrderProcessed(orderId); // Waits for the order to be processed
    await OrderShipped(); // Waits for the order to be shipped
    await OrderDeliver(); // Waits for the order to be delivered
  } catch (err) {
    console.error("Error:", err);
  }
}

// Call the function
processOrder(123);
// OrderProcessed(123)
//   .then(() => OrderShipped())
//   .then(() => OrderDeliver())
//   .catch((err) => console.log(err));

// OrderProcessed(123, () => {
//   OrderShipped(() => {
//     OrderDeliver();
//   });
// });
// let count = 0;

// const intervalId = setInterval(() => {
//   console.log("Count:", ++count);

//   // Stop after 5 counts
//   if (count === 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);
// Stopping setTimeout
// const timeoutId = setTimeout(() => {
//   console.log("This won't run.");
// }, 5000);

// clearTimeout(timeoutId); // Cancels the timeout

// // Stopping setInterval
// const intervalId = setInterval(() => {
//   console.log("Repeating...");
// }, 1000);

// setTimeout(() => clearInterval(intervalId), 3000); // Stops after 3 seconds

// const sum = function (a, b) {
//   console.log(a + b);
//   return a + b;
// };
// let x = sum(10, 30);
// console.log(x);
