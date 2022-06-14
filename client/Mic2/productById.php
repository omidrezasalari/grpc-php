<?php


include __DIR__ . '/../../vendor/autoload.php';

function product()
{
    $client = new Product\ProductServiceClient('localhost:6000', ['credentials' => Grpc\ChannelCredentials::createInsecure(),
    ]);
    try {
// request object
        $request = new \Product\ProductId();

        printf("%s\n"," ProductID: 1 ");

        $request->setId(1);

        list($res, $status) = $client->readProduct($request)->wait();
// result
        $result = [
            'name' => $res->getName(),
            'price' => $res->getPrice(),
        ];

        print_r($result);

    } catch (Exception $error) {
        echo $error;
    }
}

try {
    product();
} catch (Exception $e) {
    echo $e;
}