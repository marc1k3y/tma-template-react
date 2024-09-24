import { Address } from "@ton/core";
import { beginCell, toNano } from "@ton/ton";
import { SendTransactionRequest } from "@tonconnect/ui-react";


const destinationAddress = "UQD5asTm7kVGf11LV2zLmsMTeCEOZD2alYGkzqIrueeqxgwN";
const priceInTon = 0.1;

const destination = Address.parse(destinationAddress).toRawString();

const body = beginCell()
  .storeUint(0, 32) // Write 32 zero bits to indicate a text comment will follow
  .storeStringTail("66f1490d894d8ee5089496d4") // Write the text comment
  .endCell();

export const paymentRequest: SendTransactionRequest = {
  messages: [
    {
      address: destination,
      amount: toNano(priceInTon).toString(),
      payload: body.toBoc().toString("base64"), // Optional: Additional data
    },
  ],

  validUntil: Math.floor(Date.now() / 1000) + 360, // Expiration time in seconds since epoch
};