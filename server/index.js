// requirements
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');

// grpc service definition
const productProtoPath = path.join(__dirname, '..', 'protos', 'product.proto');
const productProtoDefinition = protoLoader.loadSync(productProtoPath);
const productPackageDefinition = grpc.loadPackageDefinition(productProtoDefinition).product;


// knex queries
function listProducts(call, callback) {

    var data = [{name: 'pencil', price: '1.99'}, {name: 'pen', price: '2.99'}];
    callback(null, {products: data});
}

function readProduct(call, callback) {
    var id = parseInt(call.request.id);
    var data = [{name: 'pencil', price: '1.99'}, {name: 'pen', price: '2.99'}];

    if (data.length) {
        callback(null, data[id]);
    } else {
        callback('That product does not exist');
    }
}


// main
function main() {
    const server = new grpc.Server();
    // gRPC service
    server.addService(productPackageDefinition.ProductService.service, {
        listProducts: listProducts,
        readProduct: readProduct,
    });
    // gRPC server
    server.bind('localhost:6000', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('gRPC server running at http://127.0.0.1:6000');
}

main();