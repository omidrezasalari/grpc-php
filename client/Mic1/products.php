<?php

use Product\Vacant;

include __DIR__ . '/../../vendor/autoload.php';

function productLists()
{
    $client = new Product\ProductServiceClient('localhost:6000', ['credentials' => Grpc\ChannelCredentials::createInsecure(),
    ]);
    try {
// request object
        $request = new Vacant();
        list($res, $status) = $client->listProducts($request)->wait();
// result
        $results = [];
        foreach ($res->getProducts() as $product) {
            $results[] = [
                'name' => $product->getName(),
                'price' => $product->getPrice(),
            ];
        }
        print_r($results);
        die();
    } catch (Exception $error) {
        echo $error;
    }
}

try {
    productLists();
} catch (Exception $e) {
    echo $e;
}