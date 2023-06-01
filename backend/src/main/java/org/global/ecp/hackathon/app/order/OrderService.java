package org.global.ecp.hackathon.app.order;

import static java.util.Objects.isNull;
import static org.springframework.util.CollectionUtils.isEmpty;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import lombok.extern.slf4j.Slf4j;
import org.global.ecp.hackathon.app.email.EmailService;
import org.global.ecp.hackathon.app.order.model.Order;
import org.global.ecp.hackathon.app.order.model.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private EmailService emailService;

    // TODO - Task 9: implement this method
    public UUID createOrder(final OrderRequest orderRequest) {
        if (isEmpty((orderRequest.getBasket().getBasketProducts()))) {
            return null;
        }
        final UUID orderId = UUID.randomUUID();
        final LocalDateTime dateTime = LocalDateTime.now();
        final Order order = Order.builder()
            .id(orderId)
            .dateTimeOfOrder(dateTime)
            .orderedProducts(orderRequest.getBasket().getBasketProducts())
            .totalCost(orderRequest.getTotalCost())
            .completed(true)
            .build();
        orderRepository.add(order);
        log.info("Order added - {}", order);
        return orderId;
    }

    public List<Order> getAllOrders() {

        return orderRepository.getAll();
    }

    // TODO - Task 12: create a complete order method here
}
