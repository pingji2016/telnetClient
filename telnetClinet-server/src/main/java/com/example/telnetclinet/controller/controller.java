package com.example.telnetclinet.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.telnetclinet.util.telnetClient;

@RestController  //@RestController= @@Controller + @ResponseBody
public class controller {

    @RequestMapping("/helloword")
    public String helloword(){
        telnetClient.readRouteProperies();
        return "helloword";
    }
}
