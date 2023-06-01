package org.global.ecp.hackathon.app.product;

import static java.util.Objects.nonNull;

import java.util.Comparator;
import java.util.List;

import java.util.Random;
import lombok.extern.slf4j.Slf4j;
import org.global.ecp.hackathon.app.product.model.Product;
import org.global.ecp.hackathon.app.product.model.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll() {

        return productRepository.getAll();
    }

    public Product getById(final Long id) {

        return productRepository.getById(id);
    }

    public Product create(final ProductDto productDto) {
        final List<Product> products = getAll();
        if (!products.stream().map(Product::getName).toList().contains(productDto.getName())) {
            long newId = products.size() + 1;
            return productRepository.add(Product.builder()
                                             .id(newId)
                                             .name(productDto.getName())
                                             .description(productDto.getDescription())
                                             .price(productDto.getPrice())
                                             .build());
        }
        log.info("Product with name - {} already exist ", productDto.getName());
        return null;
    }

    public void deleteById(final Long id) {

        productRepository.deleteById(id);
    }

}
