package com.arfema.arfemarest;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ArfemarestApplicationTests {

    @Test
    void test1() {
        System.out.println("Hello world! Do some tests!");
        assertEquals(2, 1+1);
    }

}
