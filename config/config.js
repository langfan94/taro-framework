const url = {
	development: {
		// targetUrl: 'https://pmerchant-test.bthome.com', // test
		targetUrl: "https://pmerchant-dev.bthome.com", // dev
		// targetUrl: 'http://dev.zt.bnq.com.cn:8082/mockjsdata/109', // RAP mock
		apiUrl: "http://framework.bnq.com.cn:8018",
		apiUrlFilter: "/merchantPcApi",
		proxyFilter: "/merchantPcApi",
		targetInvoiceUrl: "https://pinvoice-dev.bthome.com/invoiceAdmin",
		qiniuUrl: "//xres.bnq.com.cn/file",
		imUrl: "https:///pt-dev.bthome.com/appApi/apis",
		port: 8018,
		autoOpenBrowser: true,
	},
	prodDev: {
		apiUrl: "https://pmerchant-dev.bthome.com",
		apiUrlFilter: "/merchantPcApi",
		targetInvoiceUrl: "https://pinvoice-dev.bthome.com/invoiceAdmin",
		qiniuUrl: "https://xres.bnq.com.cn/file",
		imUrl: "https:///pt-dev.bthome.com/appApi/apis",
	},
	test: {
		apiUrl: "https://pmerchant-test.bthome.com",
		apiUrlFilter: "/merchantPcApi",
		targetInvoiceUrl: "https://pinvoice-test.bthome.com/invoiceAdmin",
		qiniuUrl: "https://xres.bnq.com.cn/file",
		imUrl: "https:///pt-test.bthome.com/appApi/apis",
	},
	production: {
		apiUrl: "https://pmerchant.bthome.com",
		apiUrlFilter: "/merchantPcApi",
		targetInvoiceUrl: "https://pinvoice.bthome.com/invoiceAdmin",
		qiniuUrl: "https://xres.bnq.com.cn/file",
		imUrl: "https:///pt.bthome.com/appApi/apis",
	},
};

module.exports = url;
