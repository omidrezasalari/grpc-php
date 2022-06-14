// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_product_pb = require('../protos/product_pb.js');

function serialize_product_Empty(arg) {
  if (!(arg instanceof protos_product_pb.Empty)) {
    throw new Error('Expected argument of type product.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Empty(buffer_arg) {
  return protos_product_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_Product(arg) {
  if (!(arg instanceof protos_product_pb.Product)) {
    throw new Error('Expected argument of type product.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Product(buffer_arg) {
  return protos_product_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductId(arg) {
  if (!(arg instanceof protos_product_pb.ProductId)) {
    throw new Error('Expected argument of type product.ProductId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductId(buffer_arg) {
  return protos_product_pb.ProductId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductList(arg) {
  if (!(arg instanceof protos_product_pb.ProductList)) {
    throw new Error('Expected argument of type product.ProductList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductList(buffer_arg) {
  return protos_product_pb.ProductList.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  listProducts: {
    path: '/product.ProductService/listProducts',
    requestStream: false,
    responseStream: false,
    requestType: protos_product_pb.Empty,
    responseType: protos_product_pb.ProductList,
    requestSerialize: serialize_product_Empty,
    requestDeserialize: deserialize_product_Empty,
    responseSerialize: serialize_product_ProductList,
    responseDeserialize: deserialize_product_ProductList,
  },
  readProduct: {
    path: '/product.ProductService/readProduct',
    requestStream: false,
    responseStream: false,
    requestType: protos_product_pb.ProductId,
    responseType: protos_product_pb.Product,
    requestSerialize: serialize_product_ProductId,
    requestDeserialize: deserialize_product_ProductId,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
