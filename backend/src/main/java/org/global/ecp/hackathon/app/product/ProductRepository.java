package org.global.ecp.hackathon.app.product;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.global.ecp.hackathon.app.product.model.Product;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

    private final Map<Long, Product> products;

    public ProductRepository() {
        products = new HashMap<>();
        populateProductsMap();
    }

    private void populateProductsMap() {

        Product product1 = new Product(1, "Colour Blast n Slay", "Vibrant with new life", 22.00);
        Product product2 = new Product(2, "Supreme Slay n Stay", "Hair for a long time... and a good time", 35.99);
        Product product3 = new Product(3, "Pump n Slay", "Compact and portable for your travels", 14.99);
        Product product4 = new Product(4, "Bush n Slay", "This is definitely for your facial hair", 19.00);
        products.put(product1.getId(), product1);
        products.put(product2.getId(), product2);
        products.put(product3.getId(), product3);
        products.put(product4.getId(), product4);
    }

    public List<Product> getAll() {

        return products.values().stream().toList();
    }

    public Product getById(final Long id) {

        return products.get(id);
    }

    public Product add(final Product product) {

        return products.put(product.getId(), product);
    }

    public void deleteById(final Long id) {

        products.remove(id);
    }
}
