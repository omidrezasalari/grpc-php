<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Product;

/**
 */
class ProductServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Product\Vacant $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function listProducts(\Product\Vacant $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/product.ProductService/listProducts',
        $argument,
        ['\Product\ProductList', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Product\ProductId $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function readProduct(\Product\ProductId $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/product.ProductService/readProduct',
        $argument,
        ['\Product\Product', 'decode'],
        $metadata, $options);
    }

}
