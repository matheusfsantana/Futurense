package com.futurense.AppCustomize.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FormsController {
	
	@RequestMapping("/placa-circular")
	public String placaCircular()
	{
		return "loja/lojaForms";
	}

}
