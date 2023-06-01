package org.global.ecp.hackathon.app.order.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.global.ecp.hackathon.app.basket.model.BasketProduct;

@Data
@SuperBuilder
public class Order {

    private UUID id;
    private LocalDateTime dateTimeOfOrder;
    private double totalCost;
    private List<BasketProduct> orderedProducts;

    private boolean completed = false;

    public Order() {}

    public Order(final UUID id,
                 final LocalDateTime dateTimeOfOrder,
                 final double totalCost,
                 final List<BasketProduct> orderedProducts) {

        this.id = id;
        this.dateTimeOfOrder = dateTimeOfOrder;
        this.totalCost = totalCost;
        this.orderedProducts = orderedProducts;
    }

    public void complete() {
        completed = true;
    }
}
