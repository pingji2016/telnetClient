package com.example.telnetclinet.controller;

import com.example.telnetclinet.message.Result;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.telnetclinet.util.TelnetClientUtil;

import java.util.Map;

@RestController  //@RestController= @@Controller + @ResponseBody
public class controller {

    TelnetClientUtil telnetClientUtil;

    @RequestMapping("/init")
    public Result helloword() {

        TelnetClientUtil.readRouteProperies();
        TelnetClientUtil telnetClientUtil = new TelnetClientUtil();
        return telnetClientUtil.loginRoute();
    }

    @RequestMapping("/sendCommand")
    public Result sendCommand(@RequestBody Map<String, Object> params) {
        String command = "";
        if (StringUtils.isNotBlank(params.get("command").toString())) {
            command = params.get("command").toString().trim();
        }

        return telnetClientUtil.sendCommand(command);
    }
}
