package org.global.ecp.hackathon.app.email;

import java.util.ArrayList;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.global.ecp.hackathon.app.basket.model.BasketProduct;
import org.global.ecp.hackathon.app.order.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    // TODO - Task 11: send a simple mail message to the email server
    public void sendEmail(final Order newOrder) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("no-reply@sprayNslay.com");
            message.setTo("task@submission.com");
            message.setSubject(String.valueOf(newOrder.getId()));
            message.setText(getMailText(newOrder));
            emailSender.send(message);
        } catch (MailException exception) {
            exception.printStackTrace();
        }
    }

    private String getMailText(final Order order) {
        return String.format("""
            Date of order: %s
            Time of order: %s
            Ordered products: 
            %s
            Total cost of order: £%s
            """, order.getDateTimeOfOrder().toLocalDate(),
                             order.getDateTimeOfOrder().toLocalTime(),
                             getFormattedProducts(order.getOrderedProducts()),
                             order.getTotalCost());
    }

    private String getFormattedProducts(List<BasketProduct> products) {
        StringBuilder productStrings = new StringBuilder();
        for (BasketProduct product : products) {
            String text =
                String.format("""
                %s
                %s
                £%s
                Quantity x %s
                """,
                              product.getProduct().getName(),
                              product.getProduct().getDescription(),
                              product.getProduct().getPrice(),
                              product.getQuantity());
            productStrings.append(text);
        }
        return String.join(",", productStrings);
    }
}
