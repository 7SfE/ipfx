// 系统版本号
const SYSTEM_VERSION = "2.7.3";
document.getElementById('version').textContent = SYSTEM_VERSION;

// 国产设备制造商列表
const domesticManufacturers = [
    "HUAWEI", "华为", "中兴", "zte", "Ruijie", "锐捷", "Phytium", "飞腾", 
    "Lenovo", "联想", "Inspur", "浪潮", "曙光", "Sugon", "BITLAND", "Bitland",
    "PANTHERA", "DONGGUAN HUARONG", "TP-LINK", "普联", "Pantum", "奔图",
    "Hefei Bitland", "LCFC", "G-PRO", "COMPAL", "EliteGroup", "Micro-Star",
    "Zhuhai Pantum", "Kyocera", "LANXUM", "宝德", "POWER LEADER", "浪潮", "INSPUR"
];

// 设备品牌映射表
const deviceBrands = {
    // 国产品牌 - 计算机
    "宝德": {name: "宝德", type: "计算机", category: "国产"},
    "POWER LEADER": {name: "宝德", type: "计算机", category: "国产"},
    "BITLAND": {name: "宝德", type: "计算机", category: "国产"},
    "浪潮": {name: "浪潮", type: "计算机", category: "国产"},
    "INSPUR": {name: "浪潮", type: "计算机", category: "国产"},
    
    // 国产品牌 - 路由器/交换机
    "HUAWEI": {name: "华为", type: "路由器/交换机", category: "国产"},
    "华为": {name: "华为", type: "路由器/交换机", category: "国产"},
    "ZTE": {name: "中兴", type: "路由器/交换机", category: "国产"},
    "中兴": {name: "中兴", type: "路由器/交换机", category: "国产"},
    "Ruijie": {name: "锐捷", type: "路由器/交换机", category: "国产"},
    "锐捷": {name: "锐捷", type: "路由器/交换机", category: "国产"},
    "H3C": {name: "新华三", type: "路由器/交换机", category: "国产"},
    "新华三": {name: "新华三", type: "路由器/交换机", category: "国产"},
    "TP-LINK": {name: "普联", type: "路由器/交换机", category: "国产"},
    "普联": {name: "普联", type: "路由器/交换机", category: "国产"},
    "TP-LINK TECHNOLOGIES": {name: "普联", type: "路由器/交换机", category: "国产"},
    "Tenda": {name: "腾达", type: "路由器/交换机", category: "国产"},
    "腾达": {name: "腾达", type: "路由器/交换机", category: "国产"},
    "PHICOMM": {name: "斐讯", type: "路由器/交换机", category: "国产"},
    "斐讯": {name: "斐讯", type: "路由器/交换机", category: "国产"},
    "MIKROTIK": {name: "MikroTik", type: "路由器/交换机", category: "国际"},
    "MikroTik": {name: "MikroTik", type: "路由器/交换机", category: "国际"},
    "QNAP": {name: "威联通", type: "路由器/交换机", category: "国产"},
    "威联通": {name: "威联通", type: "路由器/交换机", category: "国产"},
    "ASUS": {name: "华硕", type: "路由器/交换机", category: "国际"},
    "华硕": {name: "华硕", type: "路由器/交换机", category: "国际"},
    "NETCORE": {name: "磊科", type: "路由器/交换机", category: "国产"},
    "磊科": {name: "磊科", type: "路由器/交换机", category: "国产"},
    "FAST": {name: "迅捷", type: "路由器/交换机", category: "国产"},
    "迅捷": {name: "迅捷", type: "路由器/交换机", category: "国产"},
    "MERCURY": {name: "水星", type: "路由器/交换机", category: "国产"},
    "水星": {name: "水星", type: "路由器/交换机", category: "国产"},
    "D-LINK": {name: "友讯", type: "路由器/交换机", category: "国际"},
    "DLink": {name: "友讯", type: "路由器/交换机", category: "国际"},
    "LINKSYS": {name: "领势", type: "路由器/交换机", category: "国际"},
    "Linksys": {name: "领势", type: "路由器/交换机", category: "国际"},
    
    // 国产品牌 - 打印机
    "Pantum": {name: "奔图", type: "打印机", category: "国产"},
    "奔图": {name: "奔图", type: "打印机", category: "国产"},
    "Lenovo": {name: "联想", type: "打印机", category: "国产"},
    "联想": {name: "联想", type: "打印机", category: "国产"},
    "LANXUM": {name: "立思辰", type: "打印机", category: "国产"},
    "立思辰": {name: "立思辰", type: "打印机", category: "国产"},
    "HITI": {name: "汉印", type: "打印机", category: "国产"},
    "汉印": {name: "汉印", type: "打印机", category: "国产"},
    "FOUNDER": {name: "方正", type: "打印机", category: "国产"},
    "方正": {name: "方正", type: "打印机", category: "国产"},
    
    // 国际品牌 - 路由器/交换机
    "CISCO": {name: "思科", type: "路由器/交换机", category: "国际"},
    "Cisco": {name: "思科", type: "路由器/交换机", category: "国际"},
    "思科": {name: "思科", type: "路由器/交换机", category: "国际"},
    "JUNIPER": {name: "瞻博网络", type: "路由器/交换机", category: "国际"},
    "Juniper": {name: "瞻博网络", type: "路由器/交换机", category: "国际"},
    "ARUBA": {name: "Aruba", type: "路由器/交换机", category: "国际"},
    "Aruba": {name: "Aruba", type: "路由器/交换机", category: "国际"},
    "HP": {name: "惠普", type: "路由器/交换机", category: "国际"},
    "Hewlett-Packard": {name: "惠普", type: "路由器/交换机", category: "国际"},
    "DELL": {name: "戴尔", type: "路由器/交换机", category: "国际"},
    "Dell": {name: "戴尔", type: "路由器/交换机", category: "国际"},
    "NETGEAR": {name: "网件", type: "路由器/交换机", category: "国际"},
    "Netgear": {name: "网件", type: "路由器/交换机", category: "国际"},
    "Ubiquiti": {name: "优倍快", type: "路由器/交换机", category: "国际"},
    "MikroTik": {name: "MikroTik", type: "路由器/交换机", category: "国际"},
    "Fortinet": {name: "飞塔", type: "路由器/交换机", category: "国际"},
    "Palo Alto": {name: "派拓网络", type: "路由器/交换机", category: "国际"},
    "Check Point": {name: "Check Point", type: "路由器/交换机", category: "国际"},
    "SonicWall": {name: "SonicWall", type: "路由器/交换机", category: "国际"},
    "Extreme Networks": {name: "极进网络", type: "路由器/交换机", category: "国际"},
    "Alcatel-Lucent": {name: "阿尔卡特朗讯", type: "路由器/交换机", category: "国际"},
    "Nokia": {name: "诺基亚", type: "路由器/交换机", category: "国际"},
    "Ericsson": {name: "爱立信", type: "路由器/交换机", category: "国际"},
    "Brocade": {name: "博科", type: "路由器/交换机", category: "国际"},
    "Arista": {name: "Arista", type: "路由器/交换机", category: "国际"},
    "F5": {name: "F5", type: "路由器/交换机", category: "国际"},
    "Riverbed": {name: "Riverbed", type: "路由器/交换机", category: "国际"},
    
    // 国际品牌 - 打印机
    "BROTHER": {name: "兄弟", type: "打印机", category: "国际"},
    "Brother": {name: "兄弟", type: "打印机", category: "国际"},
    "CANON": {name: "佳能", type: "打印机", category: "国际"},
    "Canon": {name: "佳能", type: "打印机", category: "国际"},
    "EPSON": {name: "爱普生", type: "打印机", category: "国际"},
    "Epson": {name: "爱普生", type: "打印机", category: "国际"},
    "HP PRINTER": {name: "惠普", type: "打印机", category: "国际"},
    "XEROX": {name: "施乐", type: "打印机", category: "国际"},
    "Xerox": {name: "施乐", type: "打印机", category: "国际"},
    "RICOH": {name: "理光", type: "打印机", category: "国际"},
    "Ricoh": {name: "理光", type: "打印机", category: "国际"},
    "KYOCERA": {name: "京瓷", type: "打印机", category: "国际"},
    "Kyocera": {name: "京瓷", type: "打印机", category: "国际"},
    "FUJITSU": {name: "富士通", type: "打印机", category: "国际"},
    "Fujitsu": {name: "富士通", type: "打印机", category: "国际"},
    "OKI": {name: "OKI", type: "打印机", category: "国际"},
    "SHARP": {name: "夏普", type: "打印机", category: "国际"},
    "Sharp": {name: "夏普", type: "打印机", category: "国际"},
    "SAMSUNG": {name: "三星", type: "打印机", category: "国际"},
    "Samsung": {name: "三星", type: "打印机", category: "国际"},
    "KONICA MINOLTA": {name: "柯尼卡美能达", type: "打印机", category: "国际"},
    "Konica Minolta": {name: "柯尼卡美能达", type: "打印机", category: "国际"},
    "TOSHIBA": {name: "东芝", type: "打印机", category: "国际"},
    "Toshiba": {name: "东芝", type: "打印机", category: "国际"},
    "LEXMARK": {name: "利盟", type: "打印机", category: "国际"},
    "Lexmark": {name: "利盟", type: "打印机", category: "国际"},
    "MINOLTA": {name: "美能达", type: "打印机", category: "国际"},
    "Minolta": {name: "美能达", type: "打印机", category: "国际"},
    
    // 国际品牌 - 计算机/服务器
    "DELL": {name: "戴尔", type: "计算机/服务器", category: "国际"},
    "HP": {name: "惠普", type: "计算机/服务器", category: "国际"},
    "Hewlett-Packard": {name: "惠普", type: "计算机/服务器", category: "国际"},
    "LENOVO": {name: "联想", type: "计算机/服务器", category: "国产"},
    "联想": {name: "联想", type: "计算机/服务器", category: "国产"},
    "IBM": {name: "IBM", type: "计算机/服务器", category: "国际"},
    "ACER": {name: "宏碁", type: "计算机", category: "国际"},
    "ASUS": {name: "华硕", type: "计算机", category: "国际"},
    "MSI": {name: "微星", type: "计算机", category: "国际"},
    "GIGABYTE": {name: "技嘉", type: "计算机", category: "国际"},
    "Intel": {name: "英特尔", type: "计算机", category: "国际"},
    "AMD": {name: "AMD", type: "计算机", category: "国际"},
    "SUPERMICRO": {name: "超微", type: "服务器", category: "国际"},
    "Supermicro": {name: "超微", type: "服务器", category: "国际"},
    "Cisco": {name: "思科", type: "服务器", category: "国际"},
    "Oracle": {name: "甲骨文", type: "服务器", category: "国际"},
    "Fujitsu": {name: "富士通", type: "服务器", category: "国际"},
    "Hitachi": {name: "日立", type: "服务器", category: "国际"},
    "NEC": {name: "NEC", type: "服务器", category: "国际"}
};

// MAC地址前3位（OUI）到品牌映射 - 扩展版本
const macOuiToBrand = {
    // 宝德电脑
    "2C:1A:01": "宝德",
    "98:0E:24": "宝德",
    "00:15:5D": "宝德", // VMware中的宝德
    "00:0C:29": "宝德", // VMware中的宝德
    
    // 浪潮电脑
    "1C:83:41": "浪潮", // 修正：浪潮电脑MAC前缀
    "00:1B:24": "浪潮",
    "00:21:5E": "浪潮",
    "00:26:2D": "浪潮",
    
    // 华为设备
    "00:25:45": "华为",
    "00:18:82": "华为",
    "58:69:6C": "华为",
    "74:C9:9B": "华为",
    "E0:54:03": "华为",
    "F8:3D:FF": "华为",
    "88:25:2C": "华为",
    "D0:7E:35": "华为",
    "5C:7D:5E": "华为",
    "AC:E2:15": "华为",
    "30:24:32": "华为",
    "30:87:30": "华为",
    "64:16:7F": "华为",
    "E8:CD:2D": "华为",
    "FC:48:EF": "华为",
    "BC:76:70": "华为",
    "28:6E:D4": "华为",
    "B0:5B:67": "华为",
    "40:4D:8E": "华为",
    "54:89:98": "华为",
    "8C:DF:9D": "华为",
    "F8:62:14": "华为",
    "CC:96:E5": "华为",
    "9C:D3:5B": "华为",
    "F4:4C:70": "华为",
    "50:9F:27": "华为",
    "6C:B7:49": "华为",
    "38:85:D5": "华为",
    "84:A8:E4": "华为",
    "C8:1F:66": "华为",
    "D4:61:FE": "华为",
    "F0:98:38": "华为",
    
    // 中兴设备
    "00:1A:A9": "中兴",
    "68:A8:28": "中兴",
    "C4:15:2A": "中兴",
    "DC:72:9B": "中兴",
    "00:22:93": "中兴",
    "00:26:ED": "中兴",
    "D8:C7:C8": "锐捷",
    "00:01:02": "锐捷",
    "00:14:69": "锐捷",
    "00:1A:A1": "锐捷",
    "00:26:4C": "锐捷",
    "00:30:88": "锐捷",
    "00:3A:9D": "锐捷",
    "00:40:F4": "锐捷",
    "00:60:B0": "锐捷",
    "00:90:4C": "锐捷",
    "00:B0:4E": "锐捷",
    "00:D0:02": "锐捷",
    "00:D0:F8": "锐捷",
    "00:E0:66": "锐捷",
    "00:E0:FC": "锐捷",
    "00:F4:8D": "锐捷",
    "04:FE:31": "锐捷",
    "0C:48:85": "锐捷",
    "10:62:EB": "锐捷",
    "10:BD:18": "锐捷",
    "14:14:4B": "锐捷",
    "18:26:66": "锐捷",
    "1C:AF:05": "锐捷",
    "20:6E:9C": "锐捷",
    "24:0B:0A": "锐捷",
    "28:6E:D4": "锐捷",
    "2C:D0:2D": "锐捷",
    "30:78:6C": "锐捷",
    "38:2C:4A": "锐捷",
    "3C:0E:23": "锐捷",
    "40:B0:FA": "锐捷",
    "44:39:C4": "锐捷",
    "48:4B:AA": "锐捷",
    "4C:0F:6E": "锐捷",
    "50:7B:9D": "锐捷",
    "54:89:98": "锐捷",
    "58:69:6C": "锐捷",
    "5C:63:BF": "锐捷",
    "60:67:20": "锐捷",
    "64:09:80": "锐捷",
    "68:EF:BD": "锐捷",
    "6C:21:A2": "锐捷",
    "70:85:40": "锐捷",
    "74:26:AC": "锐捷",
    "78:2E:EF": "锐捷",
    "7C:1D:D9": "锐捷",
    "80:38:BC": "锐捷",
    "84:8E:0C": "锐捷",
    "88:A2:5E": "锐捷",
    "8C:73:6E": "锐捷",
    "90:4C:E5": "锐捷",
    "94:D9:B3": "锐捷",
    "98:0E:24": "锐捷",
    "9C:5C:F9": "锐捷",
    "A0:36:BC": "锐捷",
    "A4:4C:C8": "锐捷",
    "A8:66:7F": "锐捷",
    "AC:E2:15": "锐捷",
    "B0:4F:75": "锐捷",
    "B4:86:55": "锐捷",
    "B8:85:84": "锐捷",
    "BC:16:F5": "锐捷",
    "C0:74:AD": "锐捷",
    "C4:7B:2F": "锐捷",
    "C8:1F:66": "锐捷",
    "CC:96:E5": "锐捷",
    "D0:7E:35": "锐捷",
    "D4:61:FE": "锐捷",
    "D8:C7:C8": "锐捷",
    "DC:72:9B": "锐捷",
    "E0:54:03": "锐捷",
    "E4:C6:3D": "锐捷",
    "E8:8D:28": "锐捷",
    "EC:43:F6": "锐捷",
    "F0:98:38": "锐捷",
    "F4:4C:70": "锐捷",
    "F8:62:14": "锐捷",
    "FC:48:EF": "锐捷",
    
    // TP-LINK设备
    "C8:3A:35": "TP-LINK",
    "1C:FA:68": "TP-LINK",
    "F4:83:CD": "TP-LINK",
    "00:1D:0F": "TP-LINK",
    "00:27:19": "TP-LINK",
    "00:23:CD": "TP-LINK",
    "00:1E:8C": "TP-LINK",
    "00:1B:11": "TP-LINK",
    "00:21:27": "TP-LINK",
    "00:26:4A": "TP-LINK",
    "00:08:22": "TP-LINK",
    "00:17:3F": "TP-LINK",
    "00:18:02": "TP-LINK",
    "00:19:E0": "TP-LINK",
    "00:1A:2D": "TP-LINK",
    "00:1B:FC": "TP-LINK",
    "00:1C:F0": "TP-LINK",
    "00:1D:0F": "TP-LINK",
    "00:1E:8C": "TP-LINK",
    "00:21:27": "TP-LINK",
    "00:23:CD": "TP-LINK",
    "00:26:4A": "TP-LINK",
    "00:27:19": "TP-LINK",
    "30:B5:C2": "TP-LINK",
    "50:BD:5F": "TP-LINK",
    "60:E3:27": "TP-LINK",
    "64:70:02": "TP-LINK",
    "74:EA:3A": "TP-LINK",
    "84:D9:31": "TP-LINK",
    "98:DE:D0": "TP-LINK",
    "A0:F3:C1": "TP-LINK",
    "B0:95:75": "TP-LINK",
    "C8:3A:35": "TP-LINK",
    "CC:81:DA": "TP-LINK",
    "D0:17:6A": "TP-LINK",
    "DC:FE:07": "TP-LINK",
    "E0:19:1D": "TP-LINK",
    "E4:8B:7F": "TP-LINK",
    "EC:88:8F": "TP-LINK",
    "F4:83:CD": "TP-LINK",
    "FC:75:16": "TP-LINK",
    
    // 思科设备
    "00:1C:C0": "思科",
    "00:1B:D5": "思科",
    "00:1F:9C": "思科",
    "00:26:0B": "思科",
    "00:22:55": "思科",
    "00:23:AC": "思科",
    "00:24:14": "思科",
    "00:25:45": "思科",
    "00:26:0B": "思科",
    "00:26:F2": "思科",
    "00:27:19": "思科",
    "00:2A:6A": "思科",
    "00:2A:10": "思科",
    "00:2B:67": "思科",
    "00:2C:54": "思科",
    "00:2D:76": "思科",
    "00:2E:60": "思科",
    "00:2F:68": "思科",
    "00:30:71": "思科",
    "00:31:0A": "思科",
    "00:32:1A": "思科",
    "00:33:1A": "思科",
    "00:34:1A": "思科",
    "00:35:1A": "思科",
    "00:36:1A": "思科",
    "00:37:1A": "思科",
    "00:38:1A": "思科",
    "00:39:1A": "思科",
    "00:3A:1A": "思科",
    "00:3B:1A": "思科",
    "00:3C:1A": "思科",
    "00:3D:1A": "思科",
    "00:3E:1A": "思科",
    "00:3F:1A": "思科",
    "00:40:1A": "思科",
    "00:41:1A": "思科",
    "00:42:1A": "思科",
    "00:43:1A": "思科",
    "00:44:1A": "思科",
    "00:45:1A": "思科",
    "00:46:1A": "思科",
    "00:47:1A": "思科",
    "00:48:1A": "思科",
    "00:49:1A": "思科",
    "00:4A:1A": "思科",
    "00:4B:1A": "思科",
    "00:4C:1A": "思科",
    "00:4D:1A": "思科",
    "00:4E:1A": "思科",
    "00:4F:1A": "思科",
    "00:50:1A": "思科",
    "00:51:1A": "思科",
    "00:52:1A": "思科",
    "00:53:1A": "思科",
    "00:54:1A": "思科",
    "00:55:1A": "思科",
    "00:56:1A": "思科",
    "00:57:1A": "思科",
    "00:58:1A": "思科",
    "00:59:1A": "思科",
    "00:5A:1A": "思科",
    "00:5B:1A": "思科",
    "00:5C:1A": "思科",
    "00:5D:1A": "思科",
    "00:5E:1A": "思科",
    "00:5F:1A": "思科",
    
    // 新华三设备 (H3C)
    "00:15:E9": "新华三",
    "00:0F:E2": "新华三",
    "78:AC:C0": "新华三",
    "74:86:C2": "新华三",
    "20:F4:78": "新华三",
    "84:77:9E": "新华三",
    "00:1A:A9": "新华三",
    "00:23:89": "新华三",
    "00:24:FE": "新华三",
    "00:26:4C": "新华三",
    "00:27:19": "新华三",
    "00:2A:6A": "新华三",
    "00:2B:67": "新华三",
    "00:2C:54": "新华三",
    "00:2D:76": "新华三",
    "00:2E:60": "新华三",
    "00:2F:68": "新华三",
    "00:30:71": "新华三",
    "00:31:0A": "新华三",
    "00:32:1A": "新华三",
    "00:33:1A": "新华三",
    "00:34:1A": "新华三",
    "00:35:1A": "新华三",
    "00:36:1A": "新华三",
    "00:37:1A": "新华三",
    "00:38:1A": "新华三",
    "00:39:1A": "新华三",
    "00:3A:1A": "新华三",
    "00:3B:1A": "新华三",
    "00:3C:1A": "新华三",
    "00:3D:1A": "新华三",
    "00:3E:1A": "新华三",
    "00:3F:1A": "新华三",
    "00:40:1A": "新华三",
    "00:41:1A": "新华三",
    "00:42:1A": "新华三",
    "00:43:1A": "新华三",
    "00:44:1A": "新华三",
    "00:45:1A": "新华三",
    "00:46:1A": "新华三",
    "00:47:1A": "新华三",
    "00:48:1A": "新华三",
    "00:49:1A": "新华三",
    "00:4A:1A": "新华三",
    "00:4B:1A": "新华三",
    "00:4C:1A": "新华三",
    "00:4D:1A": "新华三",
    "00:4E:1A": "新华三",
    "00:4F:1A": "新华三",
    "00:50:1A": "新华三",
    "00:51:1A": "新华三",
    "00:52:1A": "新华三",
    "00:53:1A": "新华三",
    "00:54:1A": "新华三",
    "00:55:1A": "新华三",
    "00:56:1A": "新华三",
    "00:57:1A": "新华三",
    "00:58:1A": "新华三",
    "00:59:1A": "新华三",
    "00:5A:1A": "新华三",
    "00:5B:1A": "新华三",
    "00:5C:1A": "新华三",
    "00:5D:1A": "新华三",
    "00:5E:1A": "新华三",
    "00:5F:1A": "新华三",
    
    // 戴尔设备
    "00:14:22": "戴尔",
    "00:18:8B": "戴尔",
    "00:1D:09": "戴尔",
    "00:21:9B": "戴尔",
    "00:24:E8": "戴尔",
    "00:26:B9": "戴尔",
    "BC:30:5B": "戴尔",
    "F0:4F:7C": "戴尔",
    "00:13:72": "戴尔",
    "00:15:C5": "戴尔",
    "00:16:76": "戴尔",
    "00:18:8B": "戴尔",
    "00:1A:A0": "戴尔",
    "00:1B:78": "戴尔",
    "00:1C:23": "戴尔",
    "00:1D:09": "戴尔",
    "00:1E:4F": "戴尔",
    "00:1F:1F": "戴尔",
    "00:1F:29": "戴尔",
    "00:21:9B": "戴尔",
    "00:22:19": "戴尔",
    "00:23:AE": "戴尔",
    "00:24:E8": "戴尔",
    "00:26:B9": "戴尔",
    "00:27:10": "戴尔",
    "00:2A:6A": "戴尔",
    "00:2B:67": "戴尔",
    "00:2C:54": "戴尔",
    "00:2D:76": "戴尔",
    "00:2E:60": "戴尔",
    "00:2F:68": "戴尔",
    "00:30:71": "戴尔",
    "00:31:0A": "戴尔",
    "00:32:1A": "戴尔",
    "00:33:1A": "戴尔",
    "00:34:1A": "戴尔",
    "00:35:1A": "戴尔",
    "00:36:1A": "戴尔",
    "00:37:1A": "戴尔",
    "00:38:1A": "戴尔",
    "00:39:1A": "戴尔",
    "00:3A:1A": "戴尔",
    "00:3B:1A": "戴尔",
    "00:3C:1A": "戴尔",
    "00:3D:1A": "戴尔",
    "00:3E:1A": "戴尔",
    "00:3F:1A": "戴尔",
    "00:40:1A": "戴尔",
    "00:41:1A": "戴尔",
    "00:42:1A": "戴尔",
    "00:43:1A": "戴尔",
    "00:44:1A": "戴尔",
    "00:45:1A": "戴尔",
    "00:46:1A": "戴尔",
    "00:47:1A": "戴尔",
    "00:48:1A": "戴尔",
    "00:49:1A": "戴尔",
    "00:4A:1A": "戴尔",
    "00:4B:1A": "戴尔",
    "00:4C:1A": "戴尔",
    "00:4D:1A": "戴尔",
    "00:4E:1A": "戴尔",
    "00:4F:1A": "戴尔",
    "00:50:1A": "戴尔",
    "00:51:1A": "戴尔",
    "00:52:1A": "戴尔",
    "00:53:1A": "戴尔",
    "00:54:1A": "戴尔",
    "00:55:1A": "戴尔",
    "00:56:1A": "戴尔",
    "00:57:1A": "戴尔",
    "00:58:1A": "戴尔",
    "00:59:1A": "戴尔",
    "00:5A:1A": "戴尔",
    "00:5B:1A": "戴尔",
    "00:5C:1A": "戴尔",
    "00:5D:1A": "戴尔",
    "00:5E:1A": "戴尔",
    "00:5F:1A": "戴尔",
    
    // 惠普设备
    "00:30:C1": "惠普",
    "00:15:60": "惠普",
    "00:1F:29": "惠普",
    "00:26:55": "惠普",
    "00:0A:27": "惠普",
    "00:13:21": "惠普",
    "00:17:A4": "惠普",
    "00:18:FE": "惠普",
    "00:1B:38": "惠普",
    "00:1D:09": "惠普",
    "00:1E:0B": "惠普",
    "00:1F:29": "惠普",
    "00:21:5A": "惠普",
    "00:22:64": "惠普",
    "00:23:4D": "惠普",
    "00:24:81": "惠普",
    "00:25:B3": "惠普",
    "00:26:55": "惠普",
    "00:27:0E": "惠普",
    "00:28:F8": "惠普",
    "00:2A:6A": "惠普",
    "00:2B:67": "惠普",
    "00:2C:54": "惠普",
    "00:2D:76": "惠普",
    "00:2E:60": "惠普",
    "00:2F:68": "惠普",
    "00:30:71": "惠普",
    "00:31:0A": "惠普",
    "00:32:1A": "惠普",
    "00:33:1A": "惠普",
    "00:34:1A": "惠普",
    "00:35:1A": "惠普",
    "00:36:1A": "惠普",
    "00:37:1A": "惠普",
    "00:38:1A": "惠普",
    "00:39:1A": "惠普",
    "00:3A:1A": "惠普",
    "00:3B:1A": "惠普",
    "00:3C:1A": "惠普",
    "00:3D:1A": "惠普",
    "00:3E:1A": "惠普",
    "00:3F:1A": "惠普",
    "00:40:1A": "惠普",
    "00:41:1A": "惠普",
    "00:42:1A": "惠普",
    "00:43:1A": "惠普",
    "00:44:1A": "惠普",
    "00:45:1A": "惠普",
    "00:46:1A": "惠普",
    "00:47:1A": "惠普",
    "00:48:1A": "惠普",
    "00:49:1A": "惠普",
    "00:4A:1A": "惠普",
    "00:4B:1A": "惠普",
    "00:4C:1A": "惠普",
    "00:4D:1A": "惠普",
    "00:4E:1A": "惠普",
    "00:4F:1A": "惠普",
    "00:50:1A": "惠普",
    "00:51:1A": "惠普",
    "00:52:1A": "惠普",
    "00:53:1A": "惠普",
    "00:54:1A": "惠普",
    "00:55:1A": "惠普",
    "00:56:1A": "惠普",
    "00:57:1A": "惠普",
    "00:58:1A": "惠普",
    "00:59:1A": "惠普",
    "00:5A:1A": "惠普",
    "00:5B:1A": "惠普",
    "00:5C:1A": "惠普",
    "00:5D:1A": "惠普",
    "00:5E:1A": "惠普",
    "00:5F:1A": "惠普",
    
    // 联想设备
    "00:23:5A": "联想",
    "00:26:2D": "联想",
    "00:50:BA": "联想",
    "00:21:5A": "联想",
    "00:13:72": "联想",
    "00:16:76": "联想",
    "00:18:8B": "联想",
    "00:1A:6B": "联想",
    "00:1B:24": "联想",
    "00:1C:25": "联想",
    "00:1D:09": "联想",
    "00:1E:4F": "联想",
    "00:1F:1F": "联想",
    "00:1F:29": "联想",
    "00:20:7C": "联想",
    "00:21:5A": "联想",
    "00:22:19": "联想",
    "00:23:5A": "联想",
    "00:24:1D": "联想",
    "00:25:64": "联想",
    "00:26:2D": "联想",
    "00:27:10": "联想",
    "00:28:9F": "联想",
    "00:2A:6A": "联想",
    "00:2B:67": "联想",
    "00:2C:54": "联想",
    "00:2D:76": "联想",
    "00:2E:60": "联想",
    "00:2F:68": "联想",
    "00:30:71": "联想",
    "00:31:0A": "联想",
    "00:32:1A": "联想",
    "00:33:1A": "联想",
    "00:34:1A": "联想",
    "00:35:1A": "联想",
    "00:36:1A": "联想",
    "00:37:1A": "联想",
    "00:38:1A": "联想",
    "00:39:1A": "联想",
    "00:3A:1A": "联想",
    "00:3B:1A": "联想",
    "00:3C:1A": "联想",
    "00:3D:1A": "联想",
    "00:3E:1A": "联想",
    "00:3F:1A": "联想",
    "00:40:1A": "联想",
    "00:41:1A": "联想",
    "00:42:1A": "联想",
    "00:43:1A": "联想",
    "00:44:1A": "联想",
    "00:45:1A": "联想",
    "00:46:1A": "联想",
    "00:47:1A": "联想",
    "00:48:1A": "联想",
    "00:49:1A": "联想",
    "00:4A:1A": "联想",
    "00:4B:1A": "联想",
    "00:4C:1A": "联想",
    "00:4D:1A": "联想",
    "00:4E:1A": "联想",
    "00:4F:1A": "联想",
    "00:50:1A": "联想",
    "00:51:1A": "联想",
    "00:52:1A": "联想",
    "00:53:1A": "联想",
    "00:54:1A": "联想",
    "00:55:1A": "联想",
    "00:56:1A": "联想",
    "00:57:1A": "联想",
    "00:58:1A": "联想",
    "00:59:1A": "联想",
    "00:5A:1A": "联想",
    "00:5B:1A": "联想",
    "00:5C:1A": "联想",
    "00:5D:1A": "联想",
    "00:5E:1A": "联想",
    "00:5F:1A": "联想",
    
    // 网件设备 (NETGEAR)
    "00:90:D1": "网件",
    "00:1B:2F": "网件",
    "00:26:F2": "网件",
    "00:0F:B5": "网件",
    "00:14:6C": "网件",
    "00:18:4D": "网件",
    "00:1B:2F": "网件",
    "00:1E:2A": "网件",
    "00:22:3F": "网件",
    "00:24:B2": "网件",
    "00:26:F2": "网件",
    "00:27:19": "网件",
    "00:2A:6A": "网件",
    "00:2B:67": "网件",
    "00:2C:54": "网件",
    "00:2D:76": "网件",
    "00:2E:60": "网件",
    "00:2F:68": "网件",
    "00:30:71": "网件",
    "00:31:0A": "网件",
    "00:32:1A": "网件",
    "00:33:1A": "网件",
    "00:34:1A": "网件",
    "00:35:1A": "网件",
    "00:36:1A": "网件",
    "00:37:1A": "网件",
    "00:38:1A": "网件",
    "00:39:1A": "网件",
    "00:3A:1A": "网件",
    "00:3B:1A": "网件",
    "00:3C:1A": "网件",
    "00:3D:1A": "网件",
    "00:3E:1A": "网件",
    "00:3F:1A": "网件",
    "00:40:1A": "网件",
    "00:41:1A": "网件",
    "00:42:1A": "网件",
    "00:43:1A": "网件",
    "00:44:1A": "网件",
    "00:45:1A": "网件",
    "00:46:1A": "网件",
    "00:47:1A": "网件",
    "00:48:1A": "网件",
    "00:49:1A": "网件",
    "00:4A:1A": "网件",
    "00:4B:1A": "网件",
    "00:4C:1A": "网件",
    "00:4D:1A": "网件",
    "00:4E:1A": "网件",
    "00:4F:1A": "网件",
    "00:50:1A": "网件",
    "00:51:1A": "网件",
    "00:52:1A": "网件",
    "00:53:1A": "网件",
    "00:54:1A": "网件",
    "00:55:1A": "网件",
    "00:56:1A": "网件",
    "00:57:1A": "网件",
    "00:58:1A": "网件",
    "00:59:1A": "网件",
    "00:5A:1A": "网件",
    "00:5B:1A": "网件",
    "00:5C:1A": "网件",
    "00:5D:1A": "网件",
    "00:5E:1A": "网件",
    "00:5F:1A": "网件",
    
    // 打印机品牌
    "00:80:77": "爱普生",
    "00:0E:8C": "爱普生",
    "00:1D:AF": "爱普生",
    "00:26:AB": "爱普生",
    "00:19:5B": "兄弟",
    "30:05:5C": "兄弟",
    "80:1F:02": "兄弟",
    "00:1E:8F": "兄弟",
    "00:1B:67": "佳能",
    "00:26:93": "佳能",
    "00:17:C4": "佳能",
    "A4:15:66": "佳能",
    "00:1E:8F": "佳能",
    "00:15:99": "惠普",
    "00:30:C1": "惠普",
    "00:1F:29": "惠普",
    "00:26:55": "惠普",
    "00:0A:27": "惠普",
    "00:01:E6": "施乐",
    "00:12:7B": "施乐",
    "00:05:1B": "施乐",
    "00:80:8F": "理光",
    "00:A0:B0": "理光",
    "00:14:5B": "理光",
    "00:0C:30": "京瓷",
    "00:1E:7D": "京瓷",
    "00:22:BE": "京瓷",
    "00:18:70": "富士通",
    "00:80:38": "富士通",
    "00:10:6F": "柯尼卡美能达",
    "00:50:DA": "柯尼卡美能达",
    "00:18:01": "柯尼卡美能达",
    "00:1D:C1": "柯尼卡美能达",
    "00:30:05": "柯尼卡美能达",
    "00:08:0D": "柯尼卡美能达",
    "00:0C:76": "柯尼卡美能达",
    "00:16:C8": "柯尼卡美能达",
    "00:1B:E5": "柯尼卡美能达",
    "00:21:6B": "柯尼卡美能达",
    "00:23:68": "柯尼卡美能达",
    "00:26:9B": "柯尼卡美能达",
    "00:27:0F": "柯尼卡美能达",
    "00:2A:FA": "柯尼卡美能达",
    "00:2B:67": "柯尼卡美能达",
    "00:2C:54": "柯尼卡美能达",
    "00:2D:76": "柯尼卡美能达",
    "00:2E:60": "柯尼卡美能达",
    "00:2F:68": "柯尼卡美能达",
    "00:30:71": "柯尼卡美能达",
    "00:31:0A": "柯尼卡美能达",
    "00:32:1A": "柯尼卡美能达",
    "00:33:1A": "柯尼卡美能达",
    "00:34:1A": "柯尼卡美能达",
    "00:35:1A": "柯尼卡美能达",
    "00:36:1A": "柯尼卡美能达",
    "00:37:1A": "柯尼卡美能达",
    "00:38:1A": "柯尼卡美能达",
    "00:39:1A": "柯尼卡美能达",
    "00:3A:1A": "柯尼卡美能达",
    "00:3B:1A": "柯尼卡美能达",
    "00:3C:1A": "柯尼卡美能达",
    "00:3D:1A": "柯尼卡美能达",
    "00:3E:1A": "柯尼卡美能达",
    "00:3F:1A": "柯尼卡美能达",
    "00:40:1A": "柯尼卡美能达",
    "00:41:1A": "柯尼卡美能达",
    "00:42:1A": "柯尼卡美能达",
    "00:43:1A": "柯尼卡美能达",
    "00:44:1A": "柯尼卡美能达",
    "00:45:1A": "柯尼卡美能达",
    "00:46:1A": "柯尼卡美能达",
    "00:47:1A": "柯尼卡美能达",
    "00:48:1A": "柯尼卡美能达",
    "00:49:1A": "柯尼卡美能达",
    "00:4A:1A": "柯尼卡美能达",
    "00:4B:1A": "柯尼卡美能达",
    "00:4C:1A": "柯尼卡美能达",
    "00:4D:1A": "柯尼卡美能达",
    "00:4E:1A": "柯尼卡美能达",
    "00:4F:1A": "柯尼卡美能达",
    "00:50:1A": "柯尼卡美能达",
    "00:51:1A": "柯尼卡美能达",
    "00:52:1A": "柯尼卡美能达",
    "00:53:1A": "柯尼卡美能达",
    "00:54:1A": "柯尼卡美能达",
    "00:55:1A": "柯尼卡美能达",
    "00:56:1A": "柯尼卡美能达",
    "00:57:1A": "柯尼卡美能达",
    "00:58:1A": "柯尼卡美能达",
    "00:59:1A": "柯尼卡美能达",
    "00:5A:1A": "柯尼卡美能达",
    "00:5B:1A": "柯尼卡美能达",
    "00:5C:1A": "柯尼卡美能达",
    "00:5D:1A": "柯尼卡美能达",
    "00:5E:1A": "柯尼卡美能达",
    "00:5F:1A": "柯尼卡美能达",
    
    // 奔图打印机
    "48:45:20": "奔图",
    "48:2C:A0": "奔图",
    "5C:93:A2": "奔图",
    "64:6C:B2": "奔图",
    "70:85:40": "奔图",
    "8C:73:6E": "奔图",
    "94:D9:B3": "奔图",
    "A0:36:BC": "奔图",
    "B0:4F:75": "奔图",
    "C4:7B:2F": "奔图",
    "D0:7E:35": "奔图",
    "E4:C6:3D": "奔图",
    "F0:98:38": "奔图",
    
    // 立思辰打印机
    "00:0D:56": "立思辰",
    "00:14:78": "立思辰",
    "00:1B:24": "立思辰",
    "00:21:5E": "立思辰",
    "00:26:2D": "立思辰",
    "00:27:10": "立思辰",
    "00:28:9F": "立思辰",
    "00:2A:6A": "立思辰",
    "00:2B:67": "立思辰",
    "00:2C:54": "立思辰",
    "00:2D:76": "立思辰",
    "00:2E:60": "立思辰",
    "00:2F:68": "立思辰",
    "00:30:71": "立思辰",
    "00:31:0A": "立思辰",
    "00:32:1A": "立思辰",
    "00:33:1A": "立思辰",
    "00:34:1A": "立思辰",
    "00:35:1A": "立思辰",
    "00:36:1A": "立思辰",
    "00:37:1A": "立思辰",
    "00:38:1A": "立思辰",
    "00:39:1A": "立思辰",
    "00:3A:1A": "立思辰",
    "00:3B:1A": "立思辰",
    "00:3C:1A": "立思辰",
    "00:3D:1A": "立思辰",
    "00:3E:1A": "立思辰",
    "00:3F:1A": "立思辰",
    "00:40:1A": "立思辰",
    "00:41:1A": "立思辰",
    "00:42:1A": "立思辰",
    "00:43:1A": "立思辰",
    "00:44:1A": "立思辰",
    "00:45:1A": "立思辰",
    "00:46:1A": "立思辰",
    "00:47:1A": "立思辰",
    "00:48:1A": "立思辰",
    "00:49:1A": "立思辰",
    "00:4A:1A": "立思辰",
    "00:4B:1A": "立思辰",
    "00:4C:1A": "立思辰",
    "00:4D:1A": "立思辰",
    "00:4E:1A": "立思辰",
    "00:4F:1A": "立思辰",
    "00:50:1A": "立思辰",
    "00:51:1A": "立思辰",
    "00:52:1A": "立思辰",
    "00:53:1A": "立思辰",
    "00:54:1A": "立思辰",
    "00:55:1A": "立思辰",
    "00:56:1A": "立思辰",
    "00:57:1A": "立思辰",
    "00:58:1A": "立思辰",
    "00:59:1A": "立思辰",
    "00:5A:1A": "立思辰",
    "00:5B:1A": "立思辰",
    "00:5C:1A": "立思辰",
    "00:5D:1A": "立思辰",
    "00:5E:1A": "立思辰",
    "00:5F:1A": "立思辰",
    
    // 三星打印机
    "00:00:F0": "三星",
    "00:12:47": "三星",
    "00:13:77": "三星",
    "00:15:99": "三星",
    "00:16:32": "三星",
    "00:17:AB": "三星",
    "00:18:AF": "三星",
    "00:19:7E": "三星",
    "00:1A:8A": "三星",
    "00:1B:98": "三星",
    "00:1C:43": "三星",
    "00:1D:25": "三星",
    "00:1E:7D": "三星",
    "00:1F:CC": "三星",
    "00:20:DB": "三星",
    "00:21:4C": "三星",
    "00:22:47": "三星",
    "00:23:39": "三星",
    "00:24:54": "三星",
    "00:25:38": "三星",
    "00:26:5D": "三星",
    "00:27:19": "三星",
    "00:28:22": "三星",
    "00:29:3E": "三星",
    "00:2A:6A": "三星",
    "00:2B:67": "三星",
    "00:2C:54": "三星",
    "00:2D:76": "三星",
    "00:2E:60": "三星",
    "00:2F:68": "三星",
    "00:30:71": "三星",
    "00:31:0A": "三星",
    "00:32:1A": "三星",
    "00:33:1A": "三星",
    "00:34:1A": "三星",
    "00:35:1A": "三星",
    "00:36:1A": "三星",
    "00:37:1A": "三星",
    "00:38:1A": "三星",
    "00:39:1A": "三星",
    "00:3A:1A": "三星",
    "00:3B:1A": "三星",
    "00:3C:1A": "三星",
    "00:3D:1A": "三星",
    "00:3E:1A": "三星",
    "00:3F:1A": "三星",
    "00:40:1A": "三星",
    "00:41:1A": "三星",
    "00:42:1A": "三星",
    "00:43:1A": "三星",
    "00:44:1A": "三星",
    "00:45:1A": "三星",
    "00:46:1A": "三星",
    "00:47:1A": "三星",
    "00:48:1A": "三星",
    "00:49:1A": "三星",
    "00:4A:1A": "三星",
    "00:4B:1A": "三星",
    "00:4C:1A": "三星",
    "00:4D:1A": "三星",
    "00:4E:1A": "三星",
    "00:4F:1A": "三星",
    "00:50:1A": "三星",
    "00:51:1A": "三星",
    "00:52:1A": "三星",
    "00:53:1A": "三星",
    "00:54:1A": "三星",
    "00:55:1A": "三星",
    "00:56:1A": "三星",
    "00:57:1A": "三星",
    "00:58:1A": "三星",
    "00:59:1A": "三星",
    "00:5A:1A": "三星",
    "00:5B:1A": "三星",
    "00:5C:1A": "三星",
    "00:5D:1A": "三星",
    "00:5E:1A": "三星",
    "00:5F:1A": "三星",
    
    // 东芝打印机
    "00:08:0D": "东芝",
    "00:0A:27": "东芝",
    "00:0C:76": "东芝",
    "00:10:83": "东芝",
    "00:12:EE": "东芝",
    "00:14:D1": "东芝",
    "00:16:35": "东芝",
    "00:18:01": "东芝",
    "00:1A:33": "东芝",
    "00:1C:7D": "东芝",
    "00:1D:92": "东芝",
    "00:1F:29": "东芝",
    "00:21:5A": "东芝",
    "00:22:64": "东芝",
    "00:23:4D": "东芝",
    "00:24:81": "东芝",
    "00:25:B3": "东芝",
    "00:26:55": "东芝",
    "00:27:0E": "东芝",
    "00:28:F8": "东芝",
    "00:2A:6A": "东芝",
    "00:2B:67": "东芝",
    "00:2C:54": "东芝",
    "00:2D:76": "东芝",
    "00:2E:60": "东芝",
    "00:2F:68": "东芝",
    "00:30:71": "东芝",
    "00:31:0A": "东芝",
    "00:32:1A": "东芝",
    "00:33:1A": "东芝",
    "00:34:1A": "东芝",
    "00:35:1A": "东芝",
    "00:36:1A": "东芝",
    "00:37:1A": "东芝",
    "00:38:1A": "东芝",
    "00:39:1A": "东芝",
    "00:3A:1A": "东芝",
    "00:3B:1A": "东芝",
    "00:3C:1A": "东芝",
    "00:3D:1A": "东芝",
    "00:3E:1A": "东芝",
    "00:3F:1A": "东芝",
    "00:40:1A": "东芝",
    "00:41:1A": "东芝",
    "00:42:1A": "东芝",
    "00:43:1A": "东芝",
    "00:44:1A": "东芝",
    "00:45:1A": "东芝",
    "00:46:1A": "东芝",
    "00:47:1A": "东芝",
    "00:48:1A": "东芝",
    "00:49:1A": "东芝",
    "00:4A:1A": "东芝",
    "00:4B:1A": "东芝",
    "00:4C:1A": "东芝",
    "00:4D:1A": "东芝",
    "00:4E:1A": "东芝",
    "00:4F:1A": "东芝",
    "00:50:1A": "东芝",
    "00:51:1A": "东芝",
    "00:52:1A": "东芝",
    "00:53:1A": "东芝",
    "00:54:1A": "东芝",
    "00:55:1A": "东芝",
    "00:56:1A": "东芝",
    "00:57:1A": "东芝",
    "00:58:1A": "东芝",
    "00:59:1A": "东芝",
    "00:5A:1A": "东芝",
    "00:5B:1A": "东芝",
    "00:5C:1A": "东芝",
    "00:5D:1A": "东芝",
    "00:5E:1A": "东芝",
    "00:5F:1A": "东芝"
};

// 风险端口定义
const riskPorts = {
    highRisk: [21, 23, 135, 139, 445, 3389, 1433, 1434, 3306, 5432, 5900, 5985, 5986, 6379, 27017, 11211],
    mediumRisk: [22, 25, 53, 80, 110, 111, 143, 161, 162, 443, 465, 587, 993, 995, 1433, 1723, 3306, 3389, 5060, 5900, 8080, 8443, 8888, 9000, 9200, 9300, 11211, 27017, 28017],
    lowRisk: [20, 69, 123, 137, 138, 161, 389, 636, 873, 1433, 1521, 2375, 2376, 2379, 2380, 3000, 3306, 5000, 5432, 5601, 5672, 6379, 8000, 8008, 8010, 8081, 8090, 8181, 8880, 9001, 15672]
};

// 高风险服务定义
const highRiskServices = [
    {port: 21, service: "FTP", risk: "高危"},
    {port: 22, service: "SSH", risk: "高危"},
    {port: 23, service: "Telnet", risk: "高危"},
    {port: 135, service: "RPC", risk: "高危"},
    {port: 139, service: "NetBIOS", risk: "高危"},
    {port: 445, service: "SMB", risk: "高危"},
    {port: 3389, service: "RDP", risk: "高危"},
    {port: 1433, service: "MSSQL", risk: "高危"},
    {port: 3306, service: "MySQL", risk: "高危"},
    {port: 5900, service: "VNC", risk: "高危"},
    {port: 5985, service: "WinRM", risk: "高危"},
    {port: 5986, service: "WinRM HTTPS", risk: "高危"},
    {port: 6379, service: "Redis", risk: "高危"},
    {port: 27017, service: "MongoDB", risk: "高危"},
    {port: 11211, service: "Memcached", risk: "高危"}
];

// 设备数据存储
let devices = [];
let scanData = [];
let charts = {};
let currentEditIndex = -1;
let currentDeleteIndex = -1;
let currentRiskReportIndex = -1;

// 重复数据处理相关变量 - 改为批量处理
let duplicateDevices = [];
let currentDuplicateIndex = 0;
let batchDuplicateMode = false;

// 响应式信息
let isMobile = false;
let isTablet = false;

// 设备索引映射表 - 解决筛选后编辑索引错误问题
let deviceIndexMap = new Map(); // key: deviceId, value: originalIndex
let filteredDeviceIndices = []; // 当前筛选后的设备索引数组

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    loadFromLocalStorage();
    updateTime();
    checkResponsive();
    
    // 监听窗口大小变化
    window.addEventListener('resize', debounce(checkResponsive, 250));
});

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 检查响应式布局
function checkResponsive() {
    const width = window.innerWidth;
    const responsiveInfo = document.getElementById('responsiveInfo');
    
    if (width <= 480) {
        isMobile = true;
        isTablet = false;
        if (responsiveInfo) responsiveInfo.textContent = "移动端视图";
    } else if (width <= 768) {
        isMobile = false;
        isTablet = true;
        if (responsiveInfo) responsiveInfo.textContent = "平板视图";
    } else {
        isMobile = false;
        isTablet = false;
        if (responsiveInfo) responsiveInfo.textContent = "桌面视图";
    }
    
    // 更新图表大小
    if (charts.statusChart) {
        charts.statusChart.resize();
    }
    if (charts.riskChart) {
        charts.riskChart.resize();
    }
    if (charts.deviceTypeChart) {
        charts.deviceTypeChart.resize();
    }
    if (charts.domesticChart) {
        charts.domesticChart.resize();
    }
}

// 初始化应用
function initApp() {
    // 设置更新时间
    updateTimestamp();
    
    // 绑定文件上传事件监听器
    document.getElementById('uploadDeviceFileBtn').addEventListener('click', () => {
        document.getElementById('deviceFileInput').click();
    });
    
    document.getElementById('uploadScanFileBtn').addEventListener('click', () => {
        document.getElementById('scanFileInput').click();
    });
    
    document.getElementById('uploadNmapXmlBtn').addEventListener('click', () => {
        document.getElementById('nmapXmlFileInput').click();
    });
    
    document.getElementById('addSingleDeviceBtn').addEventListener('click', () => {
        showAddDeviceModal();
    });
    
    document.getElementById('detectBrandsBtn').addEventListener('click', () => {
        const result = manualDetectBrands();
        if (result.detected > 0 || result.updated > 0) {
            showToast(`手动识别完成：${result.detected}个设备已添加品牌信息，${result.updated}个设备已更新品牌信息`, 'success');
        } else {
            showToast('未发现需要识别品牌的新设备', 'info');
        }
    });
    
    // 绑定文件选择事件
    document.getElementById('deviceFileInput').addEventListener('change', function(e) {
        handleFileUpload(e, 'device');
    });
    
    document.getElementById('scanFileInput').addEventListener('change', function(e) {
        handleFileUpload(e, 'scan');
    });
    
    document.getElementById('nmapXmlFileInput').addEventListener('change', function(e) {
        handleNmapXmlFileUpload(e);
    });
    
    // 绑定其他按钮事件
    document.getElementById('exportHtmlBtn').addEventListener('click', exportHtmlReport);
    document.getElementById('exportDocBtn').addEventListener('click', exportDocReport);
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('importDataBtn').addEventListener('click', showImportModal);
    document.getElementById('clearDataBtn').addEventListener('click', showConfirmClearModal);
    document.getElementById('refreshBtn').addEventListener('click', refreshData);
    
    // 绑定筛选器事件
    document.getElementById('searchInput').addEventListener('input', filterDevices);
    document.getElementById('statusFilter').addEventListener('change', filterDevices);
    document.getElementById('deviceTypeFilter').addEventListener('change', filterDevices);
    document.getElementById('domesticFilter').addEventListener('change', filterDevices);
    document.getElementById('riskFilter').addEventListener('change', filterDevices);
    
    // 模态框相关事件
    document.getElementById('closeEditModalBtn').addEventListener('click', () => hideModal('editModal'));
    document.getElementById('cancelEditBtn').addEventListener('click', () => hideModal('editModal'));
    document.getElementById('saveEditBtn').addEventListener('click', saveDeviceEdit);
    
    document.getElementById('closeAddModalBtn').addEventListener('click', () => hideModal('addModal'));
    document.getElementById('cancelAddBtn').addEventListener('click', () => hideModal('addModal'));
    document.getElementById('confirmAddBtn').addEventListener('click', addNewDevice);
    
    document.getElementById('closeStatsModalBtn').addEventListener('click', () => hideModal('statsModal'));
    document.getElementById('closeStatsBtn').addEventListener('click', () => hideModal('statsModal'));
    
    document.getElementById('closeImportModalBtn').addEventListener('click', () => hideModal('importModal'));
    document.getElementById('cancelImportBtn').addEventListener('click', () => hideModal('importModal'));
    document.getElementById('confirmImportBtn').addEventListener('click', confirmImport);
    
    // 清除数据模态框事件
    document.getElementById('closeConfirmClearModalBtn').addEventListener('click', () => hideModal('confirmClearModal'));
    document.getElementById('cancelClearBtn').addEventListener('click', () => hideModal('confirmClearModal'));
    document.getElementById('confirmClearBtn').addEventListener('click', clearAllData);
    
    // 删除数据模态框事件
    document.getElementById('closeConfirmDeleteModalBtn').addEventListener('click', () => hideModal('confirmDeleteModal'));
    document.getElementById('cancelDeleteBtn').addEventListener('click', () => hideModal('confirmDeleteModal'));
    document.getElementById('confirmDeleteBtn').addEventListener('click', confirmDeleteDevice);
    
    // 批量重复数据模态框事件
    document.getElementById('closeBatchDuplicateModalBtn').addEventListener('click', () => hideModal('batchDuplicateModal'));
    document.getElementById('skipAllDuplicatesBtn').addEventListener('click', skipAllDuplicates);
    document.getElementById('overwriteAllDuplicatesBtn').addEventListener('click', overwriteAllDuplicates);
    document.getElementById('addAllDuplicatesBtn').addEventListener('click', addAllDuplicates);
    
    // 统计按钮事件
    document.getElementById('showOnlineStatsBtn').addEventListener('click', () => showStats('status'));
    document.getElementById('showRiskStatsBtn').addEventListener('click', () => showStats('risk'));
    document.getElementById('showDeviceTypesBtn').addEventListener('click', () => showStats('deviceType'));
    document.getElementById('showDomesticStatsBtn').addEventListener('click', () => showStats('domestic'));
    
    // 初始化图表
    initCharts();
    
    // 显示初始消息
    showToast('系统初始化完成，可以上传数据', 'info');
}

// 显示提示消息
function showToast(message, type = 'info') {
    const backgroundColor = {
        'success': '#34a853',
        'error': '#ea4335',
        'warning': '#f9ab00',
        'info': '#1a73e8'
    }[type];
    
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: backgroundColor,
        className: `toast-${type}`,
        stopOnFocus: true
    }).showToast();
}

// 初始化图表
function initCharts() {
    const statusCtx = document.getElementById('statusChart').getContext('2d');
    const riskCtx = document.getElementById('riskChart').getContext('2d');
    const deviceTypeCtx = document.getElementById('deviceTypeChart').getContext('2d');
    const domesticCtx = document.getElementById('domesticChart').getContext('2d');
    
    // 如果Canvas元素不存在，则跳过
    if (!statusCtx || !riskCtx || !deviceTypeCtx || !domesticCtx) {
        console.error('Canvas元素未找到');
        return;
    }
    
    charts.statusChart = new Chart(statusCtx, {
        type: 'bar',
        data: {
            labels: ['在线设备', '离线设备'],
            datasets: [{
                label: '设备数量',
                data: [0, 0],
                backgroundColor: ['#34a853', '#ea4335']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
    
    charts.riskChart = new Chart(riskCtx, {
        type: 'doughnut',
        data: {
            labels: ['高风险', '中风险', '低风险', '无风险'],
            datasets: [{
                data: [0, 0, 0, 0],
                backgroundColor: ['#ea4335', '#f9ab00', '#34a853', '#9aa0a6']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    position: isMobile ? 'top' : 'right',
                    labels: {
                        boxWidth: isMobile ? 10 : 15,
                        font: {
                            size: isMobile ? 10 : 12
                        }
                    }
                }
            }
        }
    });
    
    charts.deviceTypeChart = new Chart(deviceTypeCtx, {
        type: 'pie',
        data: {
            labels: ['计算机', '打印机', '路由器', '交换机', '服务器', '其他'],
            datasets: [{
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: ['#1a73e8', '#34a853', '#f9ab00', '#ea4335', '#9aa0a6', '#673ab7']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    position: isMobile ? 'top' : 'right',
                    labels: {
                        boxWidth: isMobile ? 10 : 15,
                        font: {
                            size: isMobile ? 10 : 12
                        }
                    }
                }
            }
        }
    });
    
    charts.domesticChart = new Chart(domesticCtx, {
        type: 'pie',
        data: {
            labels: ['国产设备', '非国产设备'],
            datasets: [{
                data: [0, 0],
                backgroundColor: ['#2e7d32', '#c2185b']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    position: isMobile ? 'top' : 'right',
                    labels: {
                        boxWidth: isMobile ? 10 : 15,
                        font: {
                            size: isMobile ? 10 : 12
                        }
                    }
                }
            }
        }
    });
}

// ==================== 基于风险端口/服务的风险评估引擎 ====================

/**
 * 基于风险端口/服务的风险评估函数
 * 根据开放的高风险端口/服务直接确定风险等级
 * 国产设备不再享受风险降级
 */
function evaluateSecurityRisk(device) {
    // 初始化风险详情
    const riskDetails = {
        highRiskPorts: [],
        mediumRiskPorts: [],
        lowRiskPorts: [],
        highRiskServices: []
    };
    
    // 如果没有开放端口，直接返回无风险
    if (!device.openPorts || device.openPorts.length === 0) {
        return {
            level: '无风险',
            score: 0,
            details: riskDetails
        };
    }
    
    // 分类风险端口
    device.openPorts.forEach(port => {
        if (riskPorts.highRisk.includes(port)) {
            riskDetails.highRiskPorts.push(port);
        } else if (riskPorts.mediumRisk.includes(port)) {
            riskDetails.mediumRiskPorts.push(port);
        } else if (riskPorts.lowRisk.includes(port)) {
            riskDetails.lowRiskPorts.push(port);
        }
    });
    
    // 检查高风险服务
    if (device.openServices) {
        device.openServices.forEach(serviceStr => {
            // 检查是否是高风险服务
            highRiskServices.forEach(hrs => {
                if (serviceStr.includes(hrs.service) || serviceStr.includes(`(${hrs.port})`)) {
                    riskDetails.highRiskServices.push(`${hrs.service}(${hrs.port})`);
                }
            });
        });
    }
    
    // 基于风险端口/服务确定风险等级
    let riskLevel;
    let riskScore = 0;
    
    // 规则1：如果有高风险端口或高风险服务 -> 高风险
    if (riskDetails.highRiskPorts.length > 0 || riskDetails.highRiskServices.length > 0) {
        riskLevel = '高风险';
        riskScore = 3;
    }
    // 规则2：如果有中风险端口 -> 中风险
    else if (riskDetails.mediumRiskPorts.length > 0) {
        riskLevel = '中风险';
        riskScore = 2;
    }
    // 规则3：只有低风险端口 -> 低风险
    else if (riskDetails.lowRiskPorts.length > 0) {
        riskLevel = '低风险';
        riskScore = 1;
    }
    // 规则4：无风险端口 -> 无风险
    else {
        riskLevel = '无风险';
        riskScore = 0;
    }
    
    return {
        level: riskLevel,
        score: riskScore,
        details: riskDetails
    };
}

// ==================== 品牌识别功能 ====================

/**
 * 检测设备品牌
 * @param {Object} device 设备对象
 * @returns {Object|null} 品牌信息对象或null
 */
function detectDeviceBrand(device) {
    const { manufacturer, name, mac, type } = device;
    
    // 1. 首先检查MAC地址前缀和主机名，判断是否为宝德或浪潮电脑
    if (mac && mac !== '' && mac !== '00:00:00:00:00:00' && mac !== '未知') {
        const macPrefix = mac.toUpperCase().substring(0, 8);
        
        // 宝德电脑
        if (macPrefix.startsWith('2C:1A:01') || macPrefix.startsWith('98:0E:24')) {
            return {
                brand: "宝德",
                brandType: "计算机",
                category: "国产",
                source: 'mac',
                os: '统信UOS'
            };
        }
        
        // 浪潮电脑 (修正为1C:83:41:73)
        if (macPrefix.startsWith('1C:83:41')) {
            return {
                brand: "浪潮",
                brandType: "计算机",
                category: "国产",
                source: 'mac',
                os: '银河麒麟'
            };
        }
    }
    
    // 2. 检查主机名
    if (name && name !== '') {
        const upperName = name.toUpperCase();
        
        // 宝德电脑
        if (upperName.includes('GXXC-PC')) {
            return {
                brand: "宝德",
                brandType: "计算机",
                category: "国产",
                source: 'hostname',
                os: '统信UOS'
            };
        }
        
        // 浪潮电脑
        if (upperName.includes('GXXC-CE520F')) {
            return {
                brand: "浪潮",
                brandType: "计算机",
                category: "国产",
                source: 'hostname',
                os: '银河麒麟'
            };
        }
    }
    
    // 3. 检查制造商字段
    if (manufacturer && manufacturer !== '') {
        const upperManufacturer = manufacturer.toUpperCase();
        for (const brandKey in deviceBrands) {
            if (upperManufacturer.includes(brandKey.toUpperCase())) {
                const brandInfo = deviceBrands[brandKey];
                
                // 检查设备类型是否匹配品牌类型
                const deviceType = type || '';
                if ((brandInfo.type === "路由器/交换机" && (deviceType === "路由器" || deviceType === "交换机")) ||
                    (brandInfo.type === "打印机" && deviceType === "打印机") ||
                    (brandInfo.type === "计算机/服务器" && (deviceType === "计算机" || deviceType === "服务器")) ||
                    (brandInfo.type === "计算机" && deviceType === "计算机") ||
                    brandInfo.type === "通用") {
                    return {
                        brand: brandInfo.name,
                        brandType: brandInfo.type,
                        category: brandInfo.category,
                        source: 'manufacturer'
                    };
                }
            }
        }
    }
    
    // 4. 检查设备名称
    if (name && name !== '') {
        const upperName = name.toUpperCase();
        for (const brandKey in deviceBrands) {
            if (upperName.includes(brandKey.toUpperCase())) {
                const brandInfo = deviceBrands[brandKey];
                const deviceType = type || '';
                if ((brandInfo.type === "路由器/交换机" && (deviceType === "路由器" || deviceType === "交换机")) ||
                    (brandInfo.type === "打印机" && deviceType === "打印机") ||
                    (brandInfo.type === "计算机/服务器" && (deviceType === "计算机" || deviceType === "服务器")) ||
                    (brandInfo.type === "计算机" && deviceType === "计算机") ||
                    brandInfo.type === "通用") {
                    return {
                        brand: brandInfo.name,
                        brandType: brandInfo.type,
                        category: brandInfo.category,
                        source: 'name'
                    };
                }
            }
        }
    }
    
    // 5. 检查MAC地址前3位（OUI）
    if (mac && mac !== '' && mac !== '00:00:00:00:00:00' && mac !== '未知') {
        const macPrefix = mac.toUpperCase().substring(0, 8); // 获取前8位，如 "00:1C:C0"
        for (const oui in macOuiToBrand) {
            if (macPrefix.startsWith(oui)) {
                const brandName = macOuiToBrand[oui];
                // 在设备品牌映射表中查找品牌信息
                for (const brandKey in deviceBrands) {
                    if (deviceBrands[brandKey].name === brandName) {
                        const brandInfo = deviceBrands[brandKey];
                        const deviceType = type || '';
                        if ((brandInfo.type === "路由器/交换机" && (deviceType === "路由器" || deviceType === "交换机")) ||
                            (brandInfo.type === "打印机" && deviceType === "打印机") ||
                            (brandInfo.type === "计算机/服务器" && (deviceType === "计算机" || deviceType === "服务器")) ||
                            (brandInfo.type === "计算机" && deviceType === "计算机") ||
                            brandInfo.type === "通用") {
                            return {
                                brand: brandName,
                                brandType: brandInfo.type,
                                category: brandInfo.category,
                                source: 'mac'
                            };
                        }
                    }
                }
            }
        }
    }
    
    return null;
}

/**
 * 更新设备备注，添加品牌信息
 * @param {Object} device 设备对象
 * @param {Object} brandInfo 品牌信息
 */
function updateDeviceNotesWithBrand(device, brandInfo) {
    if (!brandInfo) return;
    
    let brandText = `[品牌:${brandInfo.brand}`;
    if (brandInfo.category) {
        brandText += ` (${brandInfo.category})`;
    }
    
    // 添加操作系统信息（如果存在）
    if (brandInfo.os) {
        brandText += `][系统:${brandInfo.os}]`;
    } else {
        brandText += `]`;
    }
    
    // 检查备注中是否已包含品牌信息
    if (device.notes && device.notes.includes(`[品牌:${brandInfo.brand}`)) {
        // 如果已存在，检查是否需要更新操作系统信息
        if (brandInfo.os && device.notes.includes('[系统:')) {
            // 更新操作系统信息
            const oldNotes = device.notes;
            const osRegex = /\[系统:[^\]]*\]/g;
            device.notes = oldNotes.replace(osRegex, `[系统:${brandInfo.os}]`);
        }
        return; // 品牌信息已存在，不重复添加
    }
    
    // 添加到备注
    if (device.notes && device.notes.trim() !== '') {
        device.notes = `${device.notes} ${brandText}`;
    } else {
        device.notes = brandText;
    }
    
    // 同时更新制造商字段，如果原字段为空
    if ((!device.manufacturer || device.manufacturer === '') && brandInfo.source !== 'manufacturer') {
        device.manufacturer = brandInfo.brand;
    }
}

/**
 * 从备注中提取品牌信息
 */
function extractBrandFromNotes(notes) {
    if (!notes) return '未知';
    const match = notes.match(/\[品牌:([^\]]+)\]/);
    return match ? match[1] : '未知';
}

/**
 * 从备注中提取操作系统信息
 */
function extractOSFromNotes(notes) {
    if (!notes) return '未知';
    const match = notes.match(/\[系统:([^\]]+)\]/);
    return match ? match[1] : '未知';
}

/**
 * 手动识别设备品牌
 * @param {Array} deviceList 设备列表（可选，默认使用所有设备）
 */
function manualDetectBrands(deviceList = null) {
    const devicesToProcess = deviceList || devices;
    let detectedCount = 0;
    let updatedCount = 0;
    
    devicesToProcess.forEach(device => {
        const brandInfo = detectDeviceBrand(device);
        if (brandInfo) {
            const oldNotes = device.notes || '';
            updateDeviceNotesWithBrand(device, brandInfo);
            
            // 如果是宝德或浪潮电脑，确保设备类型和国产标识正确
            if (brandInfo.brand === "宝德" || brandInfo.brand === "浪潮") {
                device.type = "计算机";
                device.isDomestic = true;
                device.domesticText = "是";
            }
            
            if (device.notes !== oldNotes) {
                if (oldNotes.includes('[品牌:')) {
                    updatedCount++;
                } else {
                    detectedCount++;
                }
            }
        }
    });
    
    if (detectedCount > 0 || updatedCount > 0) {
        // 更新UI和保存
        mergeDataAndUpdate();
        saveToLocalStorage();
    }
    
    return { detected: detectedCount, updated: updatedCount };
}

/**
 * 手动识别单个设备品牌
 */
function manualDetectSingleBrand(deviceIndex) {
    if (deviceIndex < 0 || deviceIndex >= devices.length) return;
    
    const device = devices[deviceIndex];
    const brandInfo = detectDeviceBrand(device);
    
    if (brandInfo) {
        const oldNotes = device.notes || '';
        updateDeviceNotesWithBrand(device, brandInfo);
        
        // 如果是宝德或浪潮电脑，确保设备类型和国产标识正确
        if (brandInfo.brand === "宝德" || brandInfo.brand === "浪潮") {
            device.type = "计算机";
            device.isDomestic = true;
            device.domesticText = "是";
        }
        
        // 更新UI
        mergeDataAndUpdate();
        saveToLocalStorage();
        
        const action = oldNotes.includes('[品牌:') ? '更新' : '识别';
        showToast(`设备 ${device.name} 品牌已${action}为 ${brandInfo.brand}`, 'success');
        
        // 重新生成报告
        setTimeout(() => {
            generateDeviceRiskReport(deviceIndex);
        }, 500);
    } else {
        showToast('未能识别该设备品牌', 'info');
    }
}

// ==================== 文件上传与数据处理 ====================

// 处理文件上传
function handleFileUpload(event, fileType) {
    const file = event.target.files[0];
    if (!file) {
        showToast('请选择文件', 'warning');
        return;
    }
    
    // 检查文件类型
    const fileName = file.name.toLowerCase();
    const isCSV = fileName.endsWith('.csv') || fileName.endsWith('.txt');
    
    if (!isCSV) {
        showToast('请选择CSV或TXT文件', 'error');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const content = e.target.result;
        try {
            if (fileType === 'device') {
                handleDeviceCSVUpload(content);
            } else if (fileType === 'scan') {
                handleScanCSVUpload(content);
            }
            
        } catch (error) {
            console.error('解析CSV文件时出错:', error);
            showToast('解析CSV文件时出错，请检查文件格式', 'error');
        }
        
        // 重置文件输入
        event.target.value = '';
    };
    
    reader.onerror = function() {
        showToast('读取文件失败', 'error');
        event.target.value = '';
    };
    
    reader.readAsText(file, 'UTF-8');
}

// 处理设备CSV上传
function handleDeviceCSVUpload(content) {
    const lines = content.split('\n');
    if (lines.length < 2) {
        showToast('CSV文件内容为空或格式不正确', 'error');
        return;
    }
    
    const headers = lines[0].split('\t');
    const newDevices = [];
    const duplicateCandidates = [];
    let invalidCount = 0;
    let gxxcCount = 0;
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') continue;
        
        const values = line.split('\t');
        if (values.length < 5) continue;
        
        const ip = values[2] || '';
        const mac = values[12] || '00:00:00:00:00:00';
        
        // 如果IP不为空但MAC地址为空或无效，则跳过此设备
        if (ip && (!mac || mac === '00:00:00:00:00:00' || mac === '' || mac === '未知')) {
            invalidCount++;
            continue;
        }
        
        let status = values[0] || '未知';
        if (status === '确定') status = '在线';
        if (status === '关机') status = '离线';
        
        const device = {
            status: status,
            name: values[1] || values[2] || '未知设备',
            ip: ip,
            radmin: values[3] || '',
            http: values[4] || '',
            https: values[5] || '',
            ftp: values[6] || '',
            rdp: values[7] || '',
            sharedFolder: values[8] || '',
            sharedPrinter: values[9] || '',
            netbiosGroup: values[10] || '',
            manufacturer: values[11] || '',
            mac: mac,
            user: values[13] || '',
            date: values[14] || '',
            notes: values[15] || '',
            // 初始化风险相关字段
            openServices: [],
            openPorts: [],
            securityRisk: '无风险',
            riskScore: 0,
            riskDetails: {}
        };
        
        // 判断设备类型 - 设备名称带有gxxc的都是计算机
        device.type = determineDeviceType(device);
        
        // 判断是否为国产设备 - 设备名称带有gxxc的都是国产
        device.isDomestic = isDomesticDevice(device.manufacturer, device.name, device.mac);
        device.domesticText = device.isDomestic ? '是' : '否';
        
        // 统计GXXC设备
        if (device.name.toUpperCase().includes('GXXC')) {
            gxxcCount++;
            // 确保GXXC设备是计算机且国产
            device.type = '计算机';
            device.isDomestic = true;
            device.domesticText = '是';
            
            // 根据具体GXXC设备类型判断品牌和系统
            const upperName = device.name.toUpperCase();
            if (upperName.includes('GXXC-PC') && !device.notes.includes('[品牌:宝德]')) {
                device.notes = (device.notes ? device.notes + ' ' : '') + '[品牌:宝德][系统:统信UOS]';
            } else if (upperName.includes('GXXC-CE520F') && !device.notes.includes('[品牌:浪潮]')) {
                device.notes = (device.notes ? device.notes + ' ' : '') + '[品牌:浪潮][系统:银河麒麟]';
            }
        }
        
        // 检查MAC地址前缀，判断是否为宝德或浪潮电脑
        if (device.mac && device.mac !== '00:00:00:00:00:00' && device.mac !== '' && device.mac !== '未知') {
            const macPrefix = device.mac.toUpperCase().substring(0, 8);
            
            // 宝德电脑
            if (macPrefix.startsWith('2C:1A:01') || macPrefix.startsWith('98:0E:24')) {
                device.type = '计算机';
                device.isDomestic = true;
                device.domesticText = '是';
                if (!device.notes.includes('[品牌:宝德]')) {
                    device.notes = (device.notes ? device.notes + ' ' : '') + '[品牌:宝德][系统:统信UOS]';
                }
            }
            
            // 浪潮电脑 (修正为1C:83:41:73)
            if (macPrefix.startsWith('1C:83:41')) {
                device.type = '计算机';
                device.isDomestic = true;
                device.domesticText = '是';
                if (!device.notes.includes('[品牌:浪潮]')) {
                    device.notes = (device.notes ? device.notes + ' ' : '') + '[品牌:浪潮][系统:银河麒麟]';
                }
            }
        }
        
        // 检查是否与现有设备重复
        const duplicateInfo = checkDeviceDuplicate(device);
        
        if (duplicateInfo.hasDuplicate) {
            duplicateCandidates.push({
                newDevice: device,
                duplicateInfo: duplicateInfo
            });
        } else {
            newDevices.push(device);
        }
    }
    
    console.log(`解析到 ${newDevices.length + duplicateCandidates.length} 个设备，其中 ${duplicateCandidates.length} 个重复，${invalidCount} 个被忽略(无MAC地址)`);
    
    // 先添加无重复的设备
    if (newDevices.length > 0) {
        devices.push(...newDevices);
        let message = `成功添加 ${newDevices.length} 个设备`;
        if (gxxcCount > 0) {
            message += `，其中 ${gxxcCount} 个GXXC设备已自动设为计算机和国产`;
        }
        if (invalidCount > 0) {
            message += `，${invalidCount} 个设备因无MAC地址被忽略`;
        }
        showToast(message, 'success');
    } else if (invalidCount > 0) {
        showToast(`所有设备因无MAC地址被忽略，共 ${invalidCount} 个`, 'warning');
    }
    
    // 批量处理重复设备
    if (duplicateCandidates.length > 0) {
        duplicateDevices = duplicateCandidates;
        showBatchDuplicateModal();
    } else if (newDevices.length > 0) {
        // 合并数据并更新UI
        mergeDataAndUpdate();
        saveToLocalStorage();
    }
}

// 处理扫描CSV上传
function handleScanCSVUpload(content) {
    const lines = content.split('\n');
    if (lines.length < 2) {
        showToast('CSV文件内容为空或格式不正确', 'error');
        return;
    }
    
    const newScanData = [];
    let processedIPs = new Set(); // 记录处理过的IP地址
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') continue;
        
        const values = parseCSVLine(line);
        if (values.length < 4) continue;
        
        const scanItem = {
            ip: values[0] || '',
            hostname: values[1] || '',
            type: values[2] || '',
            detail: values[3] || ''
        };
        
        newScanData.push(scanItem);
        processedIPs.add(scanItem.ip);
    }
    
    console.log(`解析到 ${newScanData.length} 条扫描记录，涉及 ${processedIPs.size} 个IP地址`);
    
    // 修复问题：清除已有IP的旧扫描数据
    // 对于新CSV中出现的每个IP，先清除该IP的所有旧扫描记录
    processedIPs.forEach(ip => {
        // 从scanData中删除该IP的所有旧记录
        scanData = scanData.filter(scan => scan.ip !== ip);
    });
    
    // 然后添加新的扫描数据
    newScanData.forEach(newScan => {
        scanData.push(newScan);
    });
    
    console.log(`清理后，扫描数据总数: ${scanData.length} 条`);
    
    // 合并数据并更新UI
    mergeDataAndUpdate();
    saveToLocalStorage();
    
    showToast(`成功更新扫描记录，清理了旧数据并添加了 ${newScanData.length} 条新记录`, 'success');
}

// 检查设备是否重复
function checkDeviceDuplicate(newDevice) {
    const result = {
        hasDuplicate: false,
        ipDuplicate: false,
        macDuplicate: false,
        duplicateIndex: -1,
        duplicateDevice: null
    };
    
    // 检查IP重复
    const ipDuplicateIndex = devices.findIndex(device => device.ip === newDevice.ip);
    if (ipDuplicateIndex !== -1) {
        result.hasDuplicate = true;
        result.ipDuplicate = true;
        result.duplicateIndex = ipDuplicateIndex;
        result.duplicateDevice = devices[ipDuplicateIndex];
        
        // 检查MAC是否相同
        if (devices[ipDuplicateIndex].mac === newDevice.mac) {
            result.macDuplicate = true;
        }
        
        return result;
    }
    
    // 检查MAC重复
    const macDuplicateIndex = devices.findIndex(device => device.mac === newDevice.mac);
    if (macDuplicateIndex !== -1) {
        result.hasDuplicate = true;
        result.macDuplicate = true;
        result.duplicateIndex = macDuplicateIndex;
        result.duplicateDevice = devices[macDuplicateIndex];
        
        return result;
    }
    
    return result;
}

// 解析CSV行
function parseCSVLine(line) {
    const values = [];
    let currentValue = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            values.push(currentValue.trim());
            currentValue = '';
        } else {
            currentValue += char;
        }
    }
    
    values.push(currentValue.trim());
    return values;
}

// 合并数据并更新UI
function mergeDataAndUpdate() {
    // 为每个设备添加扫描信息并进行风险评估
    devices.forEach(device => {
        // 查找该设备的扫描信息
        const deviceScans = scanData.filter(scan => scan.ip === device.ip);
        
        // 记录当前的开放服务和端口
        const currentServices = device.openServices ? [...device.openServices] : [];
        const currentPorts = device.openPorts ? [...device.openPorts] : [];
        
        // 准备新的开放服务和端口数组
        let newServices = [];
        let newPorts = [];
        
        deviceScans.forEach(scan => {
            // 提取端口信息
            const portMatch = scan.detail.match(/\[(\d+)\]/);
            if (portMatch) {
                const port = parseInt(portMatch[1]);
                if (!newPorts.includes(port)) {
                    newPorts.push(port);
                }
                
                // 查找对应的服务
                const service = highRiskServices.find(s => s.port === port);
                if (service) {
                    const serviceStr = `${service.service}(${port})`;
                    if (!newServices.includes(serviceStr)) {
                        newServices.push(serviceStr);
                    }
                } else {
                    const serviceStr = `端口${port}`;
                    if (!newServices.includes(serviceStr)) {
                        newServices.push(serviceStr);
                    }
                }
            }
            
            // 提取服务信息
            if (scan.type.includes('HTTP') || scan.detail.includes('HTTP')) {
                if (!newServices.includes('HTTP服务')) {
                    newServices.push('HTTP服务');
                }
            }
            if (scan.type.includes('FTP') || scan.detail.includes('FTP')) {
                if (!newServices.includes('FTP服务')) {
                    newServices.push('FTP服务');
                }
            }
            if (scan.type.includes('SNMP') || scan.detail.includes('SNMP')) {
                if (!newServices.includes('SNMP服务')) {
                    newServices.push('SNMP服务');
                }
            }
        });
        
        // 比较新旧服务和端口，只有有变化时才更新
        const servicesChanged = JSON.stringify(currentServices.sort()) !== JSON.stringify(newServices.sort());
        const portsChanged = JSON.stringify(currentPorts.sort()) !== JSON.stringify(newPorts.sort());
        
        if (servicesChanged || portsChanged) {
            device.openServices = newServices;
            device.openPorts = newPorts;
            
            // 记录变化
            console.log(`设备 ${device.ip} (${device.name}) 开放服务已更新:`, {
                oldServices: currentServices,
                newServices: newServices,
                oldPorts: currentPorts,
                newPorts: newPorts
            });
        }
        
        // 使用新的风险评估函数（国产设备不再降级）
        const riskResult = evaluateSecurityRisk(device);
        device.securityRisk = riskResult.level;
        device.riskScore = riskResult.score;
        device.riskDetails = riskResult.details;
    });
    
    // 更新UI
    updateDeviceTable();
    updateCharts();
    updateStatusIndicators();
}

// 判断设备类型
function determineDeviceType(device) {
    if (!device.manufacturer && !device.name && !device.mac) return '其他';
    
    const manufacturer = (device.manufacturer || '').toUpperCase();
    const name = (device.name || '').toUpperCase();
    const mac = (device.mac || '').toUpperCase();
    
    // 设备名称带有gxxc的都是计算机
    if (name.includes('GXXC')) {
        return '计算机';
    }
    
    // 根据MAC地址前缀判断
    if (mac) {
        // 宝德电脑
        if (mac.startsWith('2C:1A:01') || mac.startsWith('98:0E:24')) {
            return '计算机';
        }
        // 浪潮电脑 (修正为1C:83:41:73)
        else if (mac.startsWith('1C:83:41')) {
            return '计算机';
        }
    }
    
    // 根据主机名判断
    if (name.includes('GXXC-PC') || name.includes('GXXC-CE520F')) {
        return '计算机';
    }
    
    // 原有判断逻辑
    if (manufacturer.includes('PRINTER') || manufacturer.includes('打印') || 
        name.includes('PRINTER') || name.includes('打印') ||
        manufacturer.includes('BROTHER') || manufacturer.includes('CANON') || 
        manufacturer.includes('PANTUM') || manufacturer.includes('HP') ||
        manufacturer.includes('KYOCERA') || manufacturer.includes('LANXUM') ||
        manufacturer.includes('EPSON') || manufacturer.includes('XEROX') ||
        manufacturer.includes('RICOH') || manufacturer.includes('FUJITSU') ||
        manufacturer.includes('OKI') || manufacturer.includes('SHARP') ||
        manufacturer.includes('SAMSUNG') || manufacturer.includes('KONICA MINOLTA') ||
        manufacturer.includes('KONICA') || manufacturer.includes('MINOLTA')) {
        return '打印机';
    } else if (manufacturer.includes('ROUTER') || manufacturer.includes('路由') ||
              manufacturer.includes('TP-LINK') || manufacturer.includes('HUAWEI') ||
              manufacturer.includes('ZTE') || manufacturer.includes('Ruijie') ||
              manufacturer.includes('CISCO') || manufacturer.includes('思科') ||
              manufacturer.includes('H3C') || manufacturer.includes('新华三') ||
              manufacturer.includes('TENDA') || manufacturer.includes('腾达') ||
              manufacturer.includes('NETGEAR') || manufacturer.includes('网件')) {
        return '路由器';
    } else if (manufacturer.includes('SWITCH') || manufacturer.includes('交换')) {
        return '交换机';
    } else if (manufacturer.includes('SERVER') || name.includes('SERVER') ||
              name.includes('WIN-') || name.includes('DESKTOP-')) {
        return '服务器';
    } else if (name.includes('PC') || name.includes('计算机') ||
              manufacturer.includes('COMPUTER') || manufacturer.includes('LENOVO') ||
              manufacturer.includes('DELL') || manufacturer.includes('HP') ||
              manufacturer.includes('MSI') || manufacturer.includes('GIGA-BYTE')) {
        return '计算机';
    } else {
        return '其他';
    }
}

// 判断是否为国产设备
function isDomesticDevice(manufacturer, name, mac) {
    const upperName = (name || '').toUpperCase();
    const upperMac = (mac || '').toUpperCase();
    const upperManufacturer = (manufacturer || '').toUpperCase();
    
    // 设备名称带有gxxc的都是国产
    if (upperName.includes('GXXC')) {
        return true;
    }
    
    // 根据MAC地址前缀判断
    if (upperMac) {
        // 宝德电脑
        if (upperMac.startsWith('2C:1A:01') || upperMac.startsWith('98:0E:24')) {
            return true;
        }
        // 浪潮电脑 (修正为1C:83:41:73)
        else if (upperMac.startsWith('1C:83:41')) {
            return true;
        }
    }
    
    // 根据主机名判断
    if (upperName.includes('GXXC-PC') || upperName.includes('GXXC-CE520F')) {
        return true;
    }
    
    // 原有判断逻辑
    if (!manufacturer) return false;
    
    return domesticManufacturers.some(domestic => upperManufacturer.includes(domestic.toUpperCase()));
}

// ==================== Nmap XML解析功能 ====================

// 处理Nmap XML文件上传
function handleNmapXmlFileUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        showToast('请选择Nmap XML文件', 'warning');
        return;
    }
    
    // 检查文件类型
    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith('.xml')) {
        showToast('请选择XML文件', 'error');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const content = e.target.result;
        try {
            handleNmapXmlUpload(content);
        } catch (error) {
            console.error('处理Nmap XML文件时出错:', error);
            showToast('处理Nmap XML文件时出错，请检查文件格式', 'error');
        }
        
        // 重置文件输入
        event.target.value = '';
    };
    
    reader.onerror = function() {
        showToast('读取文件失败', 'error');
        event.target.value = '';
    };
    
    reader.readAsText(file, 'UTF-8');
}

// 解析Nmap XML内容
function parseNmapXml(xmlContent) {
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
        
        // 检查是否有效XML
        if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
            throw new Error('XML解析错误');
        }
        
        const hosts = xmlDoc.getElementsByTagName('host');
        const newDevices = [];
        const newScanData = [];
        
        for (let i = 0; i < hosts.length; i++) {
            const host = hosts[i];
            
            // 获取状态
            const statusElement = host.getElementsByTagName('status')[0];
            const status = statusElement ? statusElement.getAttribute('state') : 'unknown';
            let statusText = '未知';
            if (status === 'up') statusText = '在线';
            else if (status === 'down') statusText = '离线';
            
            // 获取地址信息
            const addressElements = host.getElementsByTagName('address');
            let ip = '';
            let mac = '';
            let macVendor = '';
            
            for (let j = 0; j < addressElements.length; j++) {
                const addr = addressElements[j];
                const addrType = addr.getAttribute('addrtype');
                const addrValue = addr.getAttribute('addr');
                const vendor = addr.getAttribute('vendor') || '';
                
                if (addrType === 'ipv4') {
                    ip = addrValue;
                } else if (addrType === 'mac') {
                    mac = addrValue;
                    macVendor = vendor;
                }
            }
            
            // 获取主机名
            const hostnameElements = host.getElementsByTagName('hostname');
            let hostname = '';
            if (hostnameElements.length > 0) {
                hostname = hostnameElements[0].getAttribute('name') || '';
            }
            
            // 获取操作系统信息
            const osElements = host.getElementsByTagName('osmatch');
            let os = '';
            if (osElements.length > 0) {
                const osName = osElements[0].getAttribute('name') || '';
                const osAccuracy = osElements[0].getAttribute('accuracy') || '';
                os = `${osName} (${osAccuracy}% 准确度)`;
            }
            
            // 获取端口信息
            const portElements = host.getElementsByTagName('port');
            const openPorts = [];
            const openServices = [];
            
            for (let j = 0; j < portElements.length; j++) {
                const port = portElements[j];
                const portId = port.getAttribute('portid');
                const protocol = port.getAttribute('protocol');
                const stateElement = port.getElementsByTagName('state')[0];
                const state = stateElement ? stateElement.getAttribute('state') : 'unknown';
                
                if (state === 'open') {
                    openPorts.push(parseInt(portId));
                    
                    // 获取服务信息
                    const serviceElement = port.getElementsByTagName('service')[0];
                    let serviceName = '';
                    let serviceProduct = '';
                    
                    if (serviceElement) {
                        serviceName = serviceElement.getAttribute('name') || '';
                        serviceProduct = serviceElement.getAttribute('product') || '';
                        const serviceVersion = serviceElement.getAttribute('version') || '';
                        
                        let serviceStr = serviceName;
                        if (serviceProduct) serviceStr += ` ${serviceProduct}`;
                        if (serviceVersion) serviceStr += ` ${serviceVersion}`;
                        serviceStr += `(${portId})`;
                        
                        openServices.push(serviceStr);
                    } else {
                        openServices.push(`端口${portId}`);
                    }
                    
                    // 添加到扫描数据
                    newScanData.push({
                        ip: ip,
                        hostname: hostname,
                        type: `${protocol.toUpperCase()}端口扫描`,
                        detail: `${serviceName || '未知服务'} [${portId}]`
                    });
                }
            }
            
            // 创建设备对象
            if (ip) {
                const deviceName = hostname || ip;
                
                // 根据MAC地址前缀和主机名判断设备类型、品牌和操作系统
                let deviceType = '其他';
                let isDomestic = false;
                let notes = '';
                let manufacturer = macVendor || '';
                
                // 首先根据MAC地址前缀判断
                if (mac) {
                    const macPrefix = mac.toUpperCase().substring(0, 8);
                    
                    // 宝德电脑
                    if (macPrefix.startsWith('2C:1A:01') || macPrefix.startsWith('98:0E:24')) {
                        deviceType = '计算机';
                        isDomestic = true;
                        manufacturer = '宝德';
                        notes = `[品牌:宝德][系统:统信UOS]`;
                    }
                    // 浪潮电脑 (修正为1C:83:41:73)
                    else if (macPrefix.startsWith('1C:83:41')) {
                        deviceType = '计算机';
                        isDomestic = true;
                        manufacturer = '浪潮';
                        notes = `[品牌:浪潮][系统:银河麒麟]`;
                    }
                    // 其他MAC地址通过映射表判断
                    else {
                        for (const oui in macOuiToBrand) {
                            if (macPrefix.startsWith(oui)) {
                                manufacturer = macOuiToBrand[oui];
                                
                                // 判断是否国产
                                if (manufacturer === "华为" || manufacturer === "中兴" || 
                                    manufacturer === "锐捷" || manufacturer === "新华三" ||
                                    manufacturer === "宝德" || manufacturer === "浪潮" ||
                                    manufacturer === "联想" || manufacturer === "普联") {
                                    isDomestic = true;
                                }
                                break;
                            }
                        }
                        
                        if (manufacturer && manufacturer !== macVendor) {
                            notes = `[制造商:${manufacturer}]`;
                        }
                    }
                }
                
                // 根据主机名判断（覆盖MAC判断）
                const upperHostname = hostname.toUpperCase();
                if (upperHostname.includes('GXXC-PC')) {
                    deviceType = '计算机';
                    isDomestic = true;
                    manufacturer = '宝德';
                    notes = `[品牌:宝德][系统:统信UOS][主机名:${hostname}]`;
                } else if (upperHostname.includes('GXXC-CE520F')) {
                    deviceType = '计算机';
                    isDomestic = true;
                    manufacturer = '浪潮';
                    notes = `[品牌:浪潮][系统:银河麒麟][主机名:${hostname}]`;
                }
                
                // 操作系统信息
                if (os && !notes.includes('[系统:')) {
                    if (notes) notes += ' ';
                    notes += `[系统:${os}]`;
                }
                
                const device = {
                    status: statusText,
                    name: deviceName,
                    ip: ip,
                    type: deviceType,
                    mac: mac || '00:00:00:00:00:00',
                    isDomestic: isDomestic,
                    domesticText: isDomestic ? '是' : '否',
                    openServices: openServices,
                    openPorts: openPorts,
                    securityRisk: '无风险', // 将在后续评估
                    riskScore: 0,
                    riskDetails: {},
                    notes: notes,
                    manufacturer: manufacturer,
                    date: new Date().toLocaleDateString('zh-CN'),
                    source: 'nmap-xml'
                };
                
                // 评估风险
                const riskResult = evaluateSecurityRisk(device);
                device.securityRisk = riskResult.level;
                device.riskScore = riskResult.score;
                device.riskDetails = riskResult.details;
                
                newDevices.push(device);
            }
        }
        
        return {
            devices: newDevices,
            scanData: newScanData,
            count: newDevices.length
        };
        
    } catch (error) {
        console.error('解析Nmap XML时出错:', error);
        throw new Error(`解析Nmap XML文件失败: ${error.message}`);
    }
}

// 处理Nmap XML上传
function handleNmapXmlUpload(content) {
    try {
        const result = parseNmapXml(content);
        
        if (result.devices.length === 0) {
            showToast('Nmap XML文件中未找到有效设备信息', 'warning');
            return;
        }
        
        // 处理重复设备
        const newDevices = [];
        const duplicateCandidates = [];
        
        result.devices.forEach(device => {
            // 检查是否与现有设备重复
            const duplicateInfo = checkDeviceDuplicate(device);
            
            if (duplicateInfo.hasDuplicate) {
                duplicateCandidates.push({
                    newDevice: device,
                    duplicateInfo: duplicateInfo
                });
            } else {
                newDevices.push(device);
            }
        });
        
        // 添加新扫描数据
        if (result.scanData.length > 0) {
            // 先清除现有扫描数据中相同IP的记录
            const processedIPs = new Set(result.scanData.map(scan => scan.ip));
            processedIPs.forEach(ip => {
                scanData = scanData.filter(scan => scan.ip !== ip);
            });
            
            // 然后添加新的扫描数据
            scanData.push(...result.scanData);
        }
        
        // 添加无重复的设备
        if (newDevices.length > 0) {
            devices.push(...newDevices);
            showToast(`成功从Nmap XML导入 ${newDevices.length} 个设备`, 'success');
        }
        
        // 批量处理重复设备
        if (duplicateCandidates.length > 0) {
            duplicateDevices = duplicateCandidates;
            showBatchDuplicateModal();
        } else if (newDevices.length > 0) {
            // 合并数据并更新UI
            mergeDataAndUpdate();
            saveToLocalStorage();
        }
        
        console.log(`从Nmap XML导入 ${result.devices.length} 个设备，${result.scanData.length} 条扫描记录`);
        
    } catch (error) {
        console.error('处理Nmap XML上传时出错:', error);
        showToast(`导入Nmap XML失败: ${error.message}`, 'error');
    }
}

// ==================== 设备表格与UI更新 ====================

// 更新设备表格
function updateDeviceTable() {
    const tableBody = document.getElementById('deviceTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    // 获取筛选条件
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const deviceTypeFilter = document.getElementById('deviceTypeFilter').value;
    const domesticFilter = document.getElementById('domesticFilter').value;
    const riskFilter = document.getElementById('riskFilter').value;
    
    // 筛选设备 - 过滤掉没有MAC地址的设备
    let filteredDevices = devices.filter(device => {
        const mac = device.mac || '';
        return mac && mac !== '00:00:00:00:00:00' && mac !== '' && mac !== '未知';
    });
    
    if (searchTerm) {
        filteredDevices = filteredDevices.filter(device => 
            device.name.toLowerCase().includes(searchTerm) || 
            device.ip.toLowerCase().includes(searchTerm) ||
            device.mac.toLowerCase().includes(searchTerm) ||
            device.status.toLowerCase().includes(searchTerm) ||
            device.type.toLowerCase().includes(searchTerm) ||
            device.domesticText.toLowerCase().includes(searchTerm) ||
            (device.openServices && device.openServices.join(', ').toLowerCase().includes(searchTerm)) ||
            device.securityRisk.toLowerCase().includes(searchTerm) ||
            (device.notes && device.notes.toLowerCase().includes(searchTerm))
        );
    }
    
    if (statusFilter) {
        filteredDevices = filteredDevices.filter(device => device.status === statusFilter);
    }
    
    if (deviceTypeFilter) {
        filteredDevices = filteredDevices.filter(device => device.type === deviceTypeFilter);
    }
    
    if (domesticFilter) {
        const isDomestic = domesticFilter === '国产';
        filteredDevices = filteredDevices.filter(device => 
            (isDomestic && device.isDomestic) || (!isDomestic && !device.isDomestic)
        );
    }
    
    if (riskFilter) {
        filteredDevices = filteredDevices.filter(device => device.securityRisk === riskFilter);
    }
    
    // 按IP地址从小到大排序
    filteredDevices = sortDevicesByIP(filteredDevices);
    
    // 清空并重建索引映射表
    deviceIndexMap.clear();
    filteredDeviceIndices = [];
    
    // 构建设备ID到原始索引的映射
    devices.forEach((device, index) => {
        const deviceId = `${device.ip}_${device.mac}`;
        deviceIndexMap.set(deviceId, index);
    });
    
    if (filteredDevices.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="10" style="text-align: center; padding: 40px;">
                <div class="empty-data">
                    <i class="fas fa-search"></i>
                    <h4>暂无设备数据</h4>
                    <p>请上传CSV文件或手动添加设备</p>
                </div>
            </td>`;
        tableBody.appendChild(row);
        return;
    }
    
    filteredDevices.forEach((device, filteredIndex) => {
        const row = document.createElement('tr');
        
        // 根据风险级别设置行背景色
        if (device.securityRisk === '高风险') {
            row.style.backgroundColor = '#ffebee';
        } else if (device.securityRisk === '中风险') {
            row.style.backgroundColor = '#fff3e0';
        } else if (device.securityRisk === '低风险') {
            row.style.backgroundColor = '#f5f7fa';
        }
        
        // 状态显示
        let statusClass = 'status-unknown';
        if (device.status === '在线') statusClass = 'status-online';
        else if (device.status === '离线') statusClass = 'status-offline';
        
        // 设备类型显示
        let deviceTypeClass = 'device-type-other';
        if (device.type === '计算机') deviceTypeClass = 'device-type-computer';
        else if (device.type === '打印机') deviceTypeClass = 'device-type-printer';
        else if (device.type === '路由器') deviceTypeClass = 'device-type-router';
        else if (device.type === '交换机') deviceTypeClass = 'device-type-switch';
        else if (device.type === '服务器') deviceTypeClass = 'device-type-server';
        
        // 国产标识显示
        let domesticClass = device.isDomestic ? 'domestic-yes' : 'domestic-no';
        let domesticText = device.isDomestic ? '国产' : '非国产';
        
        // 安全风险显示
        let riskClass = 'risk-none';
        if (device.securityRisk === '高风险') riskClass = 'risk-high';
        else if (device.securityRisk === '中风险') riskClass = 'risk-medium';
        else if (device.securityRisk === '低风险') riskClass = 'risk-low';
        
        // 风险分数显示
        const riskScore = device.riskScore || 0;
        const riskScoreDisplay = riskScore > 0 ? `<br><small>${riskScore}级</small>` : '';
        
        // 备注显示（截断过长的备注）
        let notesDisplay = device.notes || '无';
        if (notesDisplay.length > 50) {
            notesDisplay = notesDisplay.substring(0, 47) + '...';
        }
        
        // 获取设备在原始数组中的索引
        const deviceId = `${device.ip}_${device.mac}`;
        const originalIndex = deviceIndexMap.get(deviceId);
        
        // 保存到筛选后的索引数组
        if (originalIndex !== undefined) {
            filteredDeviceIndices[filteredIndex] = originalIndex;
        }
        
        row.innerHTML = `
            <td><span class="${statusClass}">${device.status}</span></td>
            <td title="${escapeHtml(device.name)}">${escapeHtml(device.name)}</td>
            <td title="${escapeHtml(device.ip)}">${escapeHtml(device.ip)}</td>
            <td><span class="device-type-badge ${deviceTypeClass}" title="${escapeHtml(device.type)}">${escapeHtml(device.type)}</span></td>
            <td title="${escapeHtml(device.mac)}">${escapeHtml(device.mac)}</td>
            <td><span class="domestic-badge ${domesticClass}">${domesticText}</span></td>
            <td title="${escapeHtml((device.openServices && device.openServices.join(', ')) || '无')}">${escapeHtml((device.openServices && device.openServices.join(', ')) || '无')}</td>
            <td>
                <span class="${riskClass}">${device.securityRisk}${riskScoreDisplay}</span>
            </td>
            <td title="${escapeHtml(device.notes || '无')}">${escapeHtml(notesDisplay)}</td>
            <td>
                <button class="action-btn edit-btn" data-filtered-index="${filteredIndex}" title="编辑设备">
                    <i class="fas fa-edit"></i> ${isMobile ? '' : '编辑'}
                </button>
                <button class="action-btn delete-btn" data-filtered-index="${filteredIndex}" title="删除设备">
                    <i class="fas fa-trash"></i> ${isMobile ? '' : '删除'}
                </button>
                <button class="action-btn risk-btn" data-filtered-index="${filteredIndex}" title="风险评估">
                    <i class="fas fa-chart-pie"></i> ${isMobile ? '' : '风险'}
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // 为编辑按钮添加事件监听器
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filteredIndex = parseInt(this.getAttribute('data-filtered-index'));
            // 使用筛选后的索引数组获取原始索引
            const originalIndex = filteredDeviceIndices[filteredIndex];
            if (originalIndex !== undefined && originalIndex !== -1) {
                editDevice(originalIndex);
            } else {
                showToast('无法找到设备，请刷新页面后重试', 'error');
            }
        });
    });
    
    // 为删除按钮添加事件监听器
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filteredIndex = parseInt(this.getAttribute('data-filtered-index'));
            const originalIndex = filteredDeviceIndices[filteredIndex];
            if (originalIndex !== undefined && originalIndex !== -1) {
                showDeleteConfirmModal(originalIndex);
            } else {
                showToast('无法找到设备，请刷新页面后重试', 'error');
            }
        });
    });
    
    // 为风险评估按钮添加事件监听器
    document.querySelectorAll('.risk-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filteredIndex = parseInt(this.getAttribute('data-filtered-index'));
            const originalIndex = filteredDeviceIndices[filteredIndex];
            if (originalIndex !== undefined && originalIndex !== -1) {
                generateDeviceRiskReport(originalIndex);
            } else {
                showToast('无法找到设备，请刷新页面后重试', 'error');
            }
        });
    });
}

// 按IP地址从小到大排序
function sortDevicesByIP(devices) {
    return devices.sort((a, b) => {
        const ipToNumber = (ip) => {
            if (!ip) return 0;
            const parts = ip.split('.');
            if (parts.length !== 4) return 0;
            return parts.reduce((acc, part, index) => {
                return acc + parseInt(part || 0) * Math.pow(256, 3 - index);
            }, 0);
        };
        
        return ipToNumber(a.ip) - ipToNumber(b.ip);
    });
}

// 更新图表
function updateCharts() {
    if (!charts.statusChart) return;
    
    // 过滤掉没有MAC地址的设备
    const validDevices = devices.filter(device => {
        const mac = device.mac || '';
        return mac && mac !== '00:00:00:00:00:00' && mac !== '' && mac !== '未知';
    });
    
    if (validDevices.length === 0) {
        // 重置图表数据
        resetCharts();
        return;
    }
    
    // 统计设备状态 - 只统计在线和离线
    const onlineCount = validDevices.filter(d => d.status === '在线').length;
    const offlineCount = validDevices.filter(d => d.status === '离线').length;
    
    // 统计安全风险（使用新的风险评估结果）
    const highRiskCount = validDevices.filter(d => d.securityRisk === '高风险').length;
    const mediumRiskCount = validDevices.filter(d => d.securityRisk === '中风险').length;
    const lowRiskCount = validDevices.filter(d => d.securityRisk === '低风险').length;
    const noRiskCount = validDevices.filter(d => d.securityRisk === '无风险').length;
    
    // 统计设备类型
    const typeCounts = {
        '计算机': validDevices.filter(d => d.type === '计算机').length,
        '打印机': validDevices.filter(d => d.type === '打印机').length,
        '路由器': validDevices.filter(d => d.type === '路由器').length,
        '交换机': validDevices.filter(d => d.type === '交换机').length,
        '服务器': validDevices.filter(d => d.type === '服务器').length,
        '其他': validDevices.filter(d => d.type === '其他').length
    };
    
    // 统计国产设备比例
    const domesticCount = validDevices.filter(d => d.isDomestic).length;
    const foreignCount = validDevices.length - domesticCount;
    
    // 更新设备状态图表
    if (charts.statusChart) {
        charts.statusChart.data.datasets[0].data = [onlineCount, offlineCount];
        charts.statusChart.update();
    }
    
    // 更新安全风险图表
    if (charts.riskChart) {
        charts.riskChart.data.datasets[0].data = [highRiskCount, mediumRiskCount, lowRiskCount, noRiskCount];
        charts.riskChart.update();
    }
    
    // 更新设备类型图表
    if (charts.deviceTypeChart) {
        charts.deviceTypeChart.data.datasets[0].data = [
            typeCounts['计算机'],
            typeCounts['打印机'],
            typeCounts['路由器'],
            typeCounts['交换机'],
            typeCounts['服务器'],
            typeCounts['其他']
        ];
        charts.deviceTypeChart.update();
    }
    
    // 更新国产设备图表
    if (charts.domesticChart) {
        charts.domesticChart.data.datasets[0].data = [domesticCount, foreignCount];
        charts.domesticChart.update();
    }
}

// 更新状态指示器
function updateStatusIndicators() {
    // 过滤掉没有MAC地址的设备
    const validDevices = devices.filter(device => {
        const mac = device.mac || '';
        return mac && mac !== '00:00:00:00:00:00' && mac !== '' && mac !== '未知';
    });
    
    const onlineCount = validDevices.filter(d => d.status === '在线').length;
    const offlineCount = validDevices.filter(d => d.status === '离线').length;
    const domesticCount = validDevices.filter(d => d.isDomestic).length;
    const domesticPercent = validDevices.length > 0 ? Math.round((domesticCount / validDevices.length) * 100) : 0;
    
    document.getElementById('online-count').textContent = onlineCount;
    document.getElementById('offline-count').textContent = offlineCount;
    document.getElementById('domestic-percent').textContent = `${domesticPercent}%`;
}

// ==================== 设备操作功能 ====================

// 编辑设备
function editDevice(index) {
    if (index < 0 || index >= devices.length) {
        showToast('设备索引无效', 'error');
        return;
    }
    
    const device = devices[index];
    currentEditIndex = index;
    
    document.getElementById('editIndex').value = index;
    document.getElementById('editName').value = device.name;
    document.getElementById('editIp').value = device.ip;
    document.getElementById('editType').value = device.type;
    document.getElementById('editMac').value = device.mac;
    document.getElementById('editDomestic').value = device.domesticText;
    document.getElementById('editStatus').value = device.status;
    document.getElementById('editServices').value = device.openServices ? device.openServices.join(', ') : '';
    document.getElementById('editRisk').value = device.securityRisk;
    document.getElementById('editNotes').value = device.notes || '';
    
    showModal('editModal');
}

// 保存设备编辑
function saveDeviceEdit() {
    if (currentEditIndex < 0 || currentEditIndex >= devices.length) {
        showToast('设备索引无效', 'error');
        return;
    }
    
    const device = devices[currentEditIndex];
    
    // 只更新允许修改的字段
    device.name = document.getElementById('editName').value;
    device.ip = document.getElementById('editIp').value;
    device.type = document.getElementById('editType').value;
    device.mac = document.getElementById('editMac').value;
    device.domesticText = document.getElementById('editDomestic').value;
    device.isDomestic = device.domesticText === '是';
    device.status = document.getElementById('editStatus').value;
    
    const services = document.getElementById('editServices').value;
    device.openServices = services ? services.split(',').map(s => s.trim()).filter(s => s) : [];
    
    // 从服务字符串中提取端口
    device.openPorts = extractPortsFromServices(services);
    
    device.securityRisk = document.getElementById('editRisk').value;
    device.notes = document.getElementById('editNotes').value;
    
    // GXXC设备特殊处理
    if (device.name.toUpperCase().includes('GXXC')) {
        device.type = '计算机';
        device.isDomestic = true;
        device.domesticText = '是';
        
        // 根据具体名称判断品牌和系统
        const upperName = device.name.toUpperCase();
        if (upperName.includes('GXXC-PC')) {
            if (!device.notes) device.notes = '';
            if (!device.notes.includes('[品牌:宝德]')) {
                device.notes = device.notes.replace(/\[品牌:[^\]]*\]/g, '').trim();
                device.notes += ' [品牌:宝德]';
            }
            if (!device.notes.includes('[系统:统信UOS]')) {
                device.notes = device.notes.replace(/\[系统:[^\]]*\]/g, '').trim();
                device.notes += ' [系统:统信UOS]';
            }
        } else if (upperName.includes('GXXC-CE520F')) {
            if (!device.notes) device.notes = '';
            if (!device.notes.includes('[品牌:浪潮]')) {
                device.notes = device.notes.replace(/\[品牌:[^\]]*\]/g, '').trim();
                device.notes += ' [品牌:浪潮]';
            }
            if (!device.notes.includes('[系统:银河麒麟]')) {
                device.notes = device.notes.replace(/\[系统:[^\]]*\]/g, '').trim();
                device.notes += ' [系统:银河麒麟]';
            }
        }
    }
    
    // 根据MAC地址判断品牌和系统
    if (device.mac) {
        const macPrefix = device.mac.toUpperCase().substring(0, 8);
        if (!device.notes) device.notes = '';
        
        // 宝德电脑
        if (macPrefix.startsWith('2C:1A:01') || macPrefix.startsWith('98:0E:24')) {
            if (!device.notes.includes('[品牌:宝德]')) {
                device.notes = device.notes.replace(/\[品牌:[^\]]*\]/g, '').trim();
                device.notes += ' [品牌:宝德]';
            }
            if (!device.notes.includes('[系统:统信UOS]')) {
                device.notes = device.notes.replace(/\[系统:[^\]]*\]/g, '').trim();
                device.notes += ' [系统:统信UOS]';
            }
            device.type = '计算机';
            device.isDomestic = true;
            device.domesticText = '是';
        }
        // 浪潮电脑 (修正为1C:83:41:73)
        else if (macPrefix.startsWith('1C:83:41')) {
            if (!device.notes.includes('[品牌:浪潮]')) {
                device.notes = device.notes.replace(/\[品牌:[^\]]*\]/g, '').trim();
                device.notes += ' [品牌:浪潮]';
            }
            if (!device.notes.includes('[系统:银河麒麟]')) {
                device.notes = device.notes.replace(/\[系统:[^\]]*\]/g, '').trim();
                device.notes += ' [系统:银河麒麟]';
            }
            device.type = '计算机';
            device.isDomestic = true;
            device.domesticText = '是';
        }
    }
    
    // 重新评估风险
    const riskResult = evaluateSecurityRisk(device);
    device.securityRisk = riskResult.level;
    device.riskScore = riskResult.score;
    device.riskDetails = riskResult.details;
    
    // 更新UI
    updateDeviceTable();
    updateCharts();
    updateStatusIndicators();
    
    // 保存到本地存储
    saveToLocalStorage();
    
    hideModal('editModal');
    currentEditIndex = -1;
    
    showToast('设备信息更新成功', 'success');
}

// 从服务字符串中提取端口
function extractPortsFromServices(services) {
    if (!services) return [];
    
    const portPattern = /\((\d+)\)/g;
    const ports = [];
    let match;
    
    while ((match = portPattern.exec(services)) !== null) {
        ports.push(parseInt(match[1]));
    }
    
    return ports;
}

// 显示添加设备模态框
function showAddDeviceModal() {
    document.getElementById('addForm').reset();
    document.getElementById('addIp').value = '';
    document.getElementById('addMac').value = '';
    
    showModal('addModal');
}

// 添加新设备
function addNewDevice() {
    const form = document.getElementById('addForm');
    if (!form.checkValidity()) {
        showToast('请填写所有必填字段', 'error');
        return;
    }
    
    const name = document.getElementById('addName').value;
    const ip = document.getElementById('addIp').value;
    const type = document.getElementById('addType').value;
    const mac = document.getElementById('addMac').value;
    const domestic = document.getElementById('addDomestic').value;
    const status = document.getElementById('addStatus').value;
    const services = document.getElementById('addServices').value;
    const risk = document.getElementById('addRisk').value;
    const notes = document.getElementById('addNotes').value;
    
    // 验证IP格式
    if (!isValidIP(ip)) {
        showToast('IP地址格式不正确', 'error');
        return;
    }
    
    // 验证MAC格式
    if (!isValidMAC(mac)) {
        showToast('MAC地址格式不正确', 'error');
        return;
    }
    
    // 创建新设备对象
    const newDevice = {
        status: status,
        name: name,
        ip: ip,
        type: type,
        mac: mac,
        isDomestic: domestic === '是',
        domesticText: domestic,
        openServices: services ? services.split(',').map(s => s.trim()).filter(s => s) : [],
        openPorts: extractPortsFromServices(services),
        securityRisk: risk,
        riskScore: 0,
        riskDetails: {},
        notes: notes,
        manufacturer: domestic === '是' ? '国产设备' : '非国产设备',
        date: new Date().toLocaleDateString('zh-CN')
    };
    
    // GXXC设备特殊处理
    if (name.toUpperCase().includes('GXXC')) {
        newDevice.type = '计算机';
        newDevice.isDomestic = true;
        newDevice.domesticText = '是';
        
        // 根据具体GXXC设备类型判断品牌和系统
        const upperName = name.toUpperCase();
        if (upperName.includes('GXXC-PC')) {
            newDevice.notes = (newDevice.notes ? newDevice.notes + ' ' : '') + '[品牌:宝德][系统:统信UOS]';
        } else if (upperName.includes('GXXC-CE520F')) {
            newDevice.notes = (newDevice.notes ? newDevice.notes + ' ' : '') + '[品牌:浪潮][系统:银河麒麟]';
        }
    }
    
    // 根据MAC地址判断品牌和系统
    if (mac) {
        const macPrefix = mac.toUpperCase().substring(0, 8);
        if (!newDevice.notes) newDevice.notes = '';
        
        // 宝德电脑
        if (macPrefix.startsWith('2C:1A:01') || macPrefix.startsWith('98:0E:24')) {
            newDevice.notes = (newDevice.notes ? newDevice.notes + ' ' : '') + '[品牌:宝德][系统:统信UOS]';
            newDevice.type = '计算机';
            newDevice.isDomestic = true;
            newDevice.domesticText = '是';
        }
        // 浪潮电脑 (修正为1C:83:41:73)
        else if (macPrefix.startsWith('1C:83:41')) {
            newDevice.notes = (newDevice.notes ? newDevice.notes + ' ' : '') + '[品牌:浪潮][系统:银河麒麟]';
            newDevice.type = '计算机';
            newDevice.isDomestic = true;
            newDevice.domesticText = '是';
        }
    }
    
    // 评估风险
    const riskResult = evaluateSecurityRisk(newDevice);
    newDevice.securityRisk = riskResult.level;
    newDevice.riskScore = riskResult.score;
    newDevice.riskDetails = riskResult.details;
    
    // 检查是否重复
    const duplicateInfo = checkDeviceDuplicate(newDevice);
    
    if (duplicateInfo.hasDuplicate) {
        // 直接覆盖重复设备（根据新规则）
        mergeDuplicateDevice(newDevice, duplicateInfo.duplicateIndex);
        showToast('设备已存在，已覆盖IP、MAC、开放服务和风险信息', 'info');
        hideModal('addModal');
    } else {
        devices.push(newDevice);
        mergeDataAndUpdate();
        saveToLocalStorage();
        showToast('设备添加成功', 'success');
        hideModal('addModal');
    }
}

// 验证IP地址
function isValidIP(ip) {
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipPattern.test(ip)) return false;
    
    const parts = ip.split('.');
    for (let part of parts) {
        const num = parseInt(part, 10);
        if (num < 0 || num > 255) return false;
    }
    
    return true;
}

// 验证MAC地址
function isValidMAC(mac) {
    const macPattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macPattern.test(mac);
}

// 显示删除确认模态框
function showDeleteConfirmModal(index) {
    if (index < 0 || index >= devices.length) return;
    
    const device = devices[index];
    currentDeleteIndex = index;
    
    document.getElementById('deleteDeviceName').textContent = device.name;
    document.getElementById('deleteDeviceInfo').innerHTML = `
        <p><strong>IP地址:</strong> ${escapeHtml(device.ip)}</p>
        <p><strong>MAC地址:</strong> ${escapeHtml(device.mac)}</p>
        <p><strong>设备类型:</strong> ${escapeHtml(device.type)}</p>
        <p><strong>安全风险:</strong> <span class="${getRiskClass(device.securityRisk)}">${device.securityRisk}</span></p>
    `;
    
    showModal('confirmDeleteModal');
}

// 确认删除设备
function confirmDeleteDevice() {
    if (currentDeleteIndex < 0 || currentDeleteIndex >= devices.length) {
        hideModal('confirmDeleteModal');
        return;
    }
    
    const deletedDevice = devices[currentDeleteIndex];
    
    // 删除设备
    devices.splice(currentDeleteIndex, 1);
    
    // 更新UI
    mergeDataAndUpdate();
    saveToLocalStorage();
    
    showToast(`设备 "${deletedDevice.name}" 已删除`, 'success');
    hideModal('confirmDeleteModal');
    currentDeleteIndex = -1;
}

// 获取风险CSS类
function getRiskClass(risk) {
    switch(risk) {
        case '高风险': return 'risk-high';
        case '中风险': return 'risk-medium';
        case '低风险': return 'risk-low';
        default: return 'risk-none';
    }
}

// ==================== 批量重复数据处理 ====================

/**
 * 合并重复设备（根据新规则：只覆盖IP、MAC、开放服务、安全风险）
 * @param {Object} newDevice 新设备
 * @param {Number} duplicateIndex 重复设备的索引
 */
function mergeDuplicateDevice(newDevice, duplicateIndex) {
    if (duplicateIndex < 0 || duplicateIndex >= devices.length) return;
    
    const existingDevice = devices[duplicateIndex];
    
    // 只覆盖指定字段
    existingDevice.ip = newDevice.ip;
    existingDevice.mac = newDevice.mac;
    existingDevice.openServices = newDevice.openServices;
    existingDevice.openPorts = newDevice.openPorts;
    existingDevice.status = newDevice.status; // 更新状态
    
    // 重新评估风险
    const riskResult = evaluateSecurityRisk(existingDevice);
    existingDevice.securityRisk = riskResult.level;
    existingDevice.riskScore = riskResult.score;
    existingDevice.riskDetails = riskResult.details;
    
    // 不覆盖设备名称、设备类型和备注
}

/**
 * 显示批量重复数据确认模态框
 */
function showBatchDuplicateModal() {
    if (duplicateDevices.length === 0) {
        hideModal('batchDuplicateModal');
        mergeDataAndUpdate();
        saveToLocalStorage();
        return;
    }
    
    const ipDuplicates = duplicateDevices.filter(d => d.duplicateInfo.ipDuplicate);
    const macDuplicates = duplicateDevices.filter(d => d.duplicateInfo.macDuplicate);
    
    let message = `
        <div class="duplicate-alert">
            <p><i class="fas fa-exclamation-circle"></i> 发现 ${duplicateDevices.length} 个重复设备：</p>
            <div class="device-info">
                <p><strong>IP地址重复:</strong> ${ipDuplicates.length} 个</p>
                <p><strong>MAC地址重复:</strong> ${macDuplicates.length} 个</p>
            </div>
            <hr>
            <p><strong>处理规则：</strong></p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>覆盖操作：</strong>只覆盖IP地址、MAC地址、开放服务、安全风险、设备状态</li>
                <li><strong>保留字段：</strong>设备名称、设备类型和备注不会被覆盖</li>
                <li><strong>GXXC设备：</strong>自动设为计算机和国产</li>
                <li><strong>宝德/浪潮设备：</strong>根据MAC地址和主机名自动识别</li>
            </ul>
            <p>请选择批量处理方式：</p>
        </div>
    `;
    
    // 显示前10个重复设备示例
    if (duplicateDevices.length > 0) {
        message += `<div style="max-height: 200px; overflow-y: auto; margin-top: 10px;">
            <table style="width: 100%; font-size: 0.9rem;">
                <thead>
                    <tr>
                        <th>新设备名称</th>
                        <th>IP地址</th>
                        <th>现有设备名称</th>
                        <th>重复类型</th>
                    </tr>
                </thead>
                <tbody>`;
        
        duplicateDevices.slice(0, 10).forEach((dup, index) => {
            const dupType = dup.duplicateInfo.ipDuplicate && dup.duplicateInfo.macDuplicate ? 
                "IP+MAC重复" : dup.duplicateInfo.ipDuplicate ? "IP重复" : "MAC重复";
            
            message += `
                <tr>
                    <td>${escapeHtml(dup.newDevice.name)}</td>
                    <td>${escapeHtml(dup.newDevice.ip)}</td>
                    <td>${escapeHtml(dup.duplicateInfo.duplicateDevice.name)}</td>
                    <td>${dupType}</td>
                </tr>`;
        });
        
        if (duplicateDevices.length > 10) {
            message += `<tr><td colspan="4" style="text-align: center;">... 还有 ${duplicateDevices.length - 10} 个重复设备</td></tr>`;
        }
        
        message += `</tbody></table></div>`;
    }
    
    document.getElementById('batchDuplicateContent').innerHTML = message;
    showModal('batchDuplicateModal');
}

/**
 * 跳过所有重复设备
 */
function skipAllDuplicates() {
    showToast(`跳过了 ${duplicateDevices.length} 个重复设备`, 'info');
    duplicateDevices = [];
    hideModal('batchDuplicateModal');
    
    // 合并数据并更新UI
    mergeDataAndUpdate();
    saveToLocalStorage();
}

/**
 * 覆盖所有重复设备
 */
function overwriteAllDuplicates() {
    let overwrittenCount = 0;
    
    duplicateDevices.forEach(dup => {
        mergeDuplicateDevice(dup.newDevice, dup.duplicateInfo.duplicateIndex);
        overwrittenCount++;
    });
    
    showToast(`覆盖了 ${overwrittenCount} 个重复设备`, 'success');
    duplicateDevices = [];
    hideModal('batchDuplicateModal');
    
    // 合并数据并更新UI
    mergeDataAndUpdate();
    saveToLocalStorage();
}

/**
 * 新增所有重复设备（作为新设备添加）
 */
function addAllDuplicates() {
    let addedCount = 0;
    
    duplicateDevices.forEach(dup => {
        devices.push(dup.newDevice);
        addedCount++;
    });
    
    showToast(`新增了 ${addedCount} 个设备（包含重复）`, 'success');
    duplicateDevices = [];
    hideModal('batchDuplicateModal');
    
    // 合并数据并更新UI
    mergeDataAndUpdate();
    saveToLocalStorage();
}

// ==================== 系统管理功能 ====================

// 显示确认清除数据模态框
function showConfirmClearModal() {
    const validDevices = devices.filter(device => {
        const mac = device.mac || '';
        return mac && mac !== '00:00:00:00:00:00' && mac !== '' && mac !== '未知';
    });
    
    if (validDevices.length === 0) {
        showToast('当前没有有效数据可清除', 'warning');
        return;
    }
    
    showModal('confirmClearModal');
}

// 清除全部数据
function clearAllData() {
    devices = [];
    scanData = [];
    duplicateDevices = [];
    deviceIndexMap.clear();
    filteredDeviceIndices = [];
    
    localStorage.removeItem('networkSecurityData');
    
    document.getElementById('searchInput').value = '';
    document.getElementById('statusFilter').value = '';
    document.getElementById('deviceTypeFilter').value = '';
    document.getElementById('domesticFilter').value = '';
    document.getElementById('riskFilter').value = '';
    
    resetCharts();
    
    updateDeviceTable();
    updateStatusIndicators();
    
    updateTimestamp();
    
    hideModal('confirmClearModal');
    
    showToast('所有数据已清除，系统已重置', 'success');
}

// 重置图表数据到初始值
function resetCharts() {
    if (charts.statusChart) {
        charts.statusChart.data.datasets[0].data = [0, 0];
        charts.statusChart.update();
    }
    
    if (charts.riskChart) {
        charts.riskChart.data.datasets[0].data = [0, 0, 0, 0];
        charts.riskChart.update();
    }
    
    if (charts.deviceTypeChart) {
        charts.deviceTypeChart.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
        charts.deviceTypeChart.update();
    }
    
    if (charts.domesticChart) {
        charts.domesticChart.data.datasets[0].data = [0, 0];
        charts.domesticChart.update();
    }
}

// 刷新数据
function refreshData() {
    const validDevices = devices.filter(device => {
        const mac = device.mac || '';
        return mac && mac !== '00:00:00:00:00:00' && mac !== '' && mac !== '未知';
    });
    
    if (validDevices.length === 0) {
        showToast('没有有效数据可以刷新', 'warning');
        return;
    }
    
    // 重新评估所有设备风险
    devices.forEach(device => {
        const riskResult = evaluateSecurityRisk(device);
        device.securityRisk = riskResult.level;
        device.riskScore = riskResult.score;
        device.riskDetails = riskResult.details;
    });
    
    mergeDataAndUpdate();
    updateTimestamp();
    showToast('数据已刷新，所有设备风险已重新评估', 'success');
}

// 筛选设备
function filterDevices() {
    updateDeviceTable();
}

// 保存到本地存储
function saveToLocalStorage() {
    const dataToSave = {
        devices: devices,
        scanData: scanData,
        saveTime: new Date().toISOString(),
        version: SYSTEM_VERSION,
        riskEngine: '基于端口风险v2.7'
    };
    
    localStorage.setItem('networkSecurityData', JSON.stringify(dataToSave));
    console.log('数据已保存到本地存储');
}

// 从本地存储加载
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('networkSecurityData');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            devices = parsedData.devices || [];
            scanData = parsedData.scanData || [];
            
            if (devices.length > 0) {
                // 重新评估所有设备风险（确保使用新引擎）
                devices.forEach(device => {
                    const riskResult = evaluateSecurityRisk(device);
                    device.securityRisk = riskResult.level;
                    device.riskScore = riskResult.score;
                    device.riskDetails = riskResult.details;
                });
                
                mergeDataAndUpdate();
                console.log('从本地存储加载了数据，已重新评估风险');
                showToast('已从本地存储恢复数据，并使用基于端口风险的新评估引擎重新评估', 'success');
            }
        } catch (error) {
            console.error('加载本地存储数据失败:', error);
            showToast('加载本地存储数据失败，数据可能已损坏', 'error');
        }
    }
}

// ==================== 通用工具函数 ====================

// 显示模态框
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// 隐藏模态框
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// 更新时间戳
function updateTimestamp() {
    const now = new Date();
    document.getElementById('updateTime').textContent = now.toLocaleString('zh-CN');
}

// 定期更新时间
function updateTime() {
    updateTimestamp();
    setInterval(() => {
        updateTimestamp();
    }, 60000);
}

// HTML转义函数，防止XSS攻击
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== 其他功能函数 ====================

// 生成设备风险评估报告
function generateDeviceRiskReport(deviceIndex) {
    if (deviceIndex < 0 || deviceIndex >= devices.length) {
        showToast('设备索引无效', 'error');
        return;
    }
    
    const device = devices[deviceIndex];
    const riskResult = evaluateSecurityRisk(device);
    
    // 提取品牌和操作系统信息
    let brandInfo = extractBrandFromNotes(device.notes);
    let osInfo = extractOSFromNotes(device.notes);
    
    // 如果备注中没有操作系统信息，尝试根据MAC地址或主机名判断
    if (osInfo === '未知') {
        if (device.mac) {
            const macPrefix = device.mac.toUpperCase().substring(0, 8);
            if (macPrefix.startsWith('2C:1A:01') || macPrefix.startsWith('98:0E:24')) {
                osInfo = '统信UOS';
            } else if (macPrefix.startsWith('1C:83:41')) {
                osInfo = '银河麒麟';
            }
        }
        
        if (device.name) {
            const upperName = device.name.toUpperCase();
            if (upperName.includes('GXXC-PC')) {
                osInfo = '统信UOS';
            } else if (upperName.includes('GXXC-CE520F')) {
                osInfo = '银河麒麟';
            }
        }
    }
    
    let reportHtml = `
        <div class="risk-report">
            <div class="report-header">
                <h4><i class="fas fa-shield-alt"></i> 设备安全风险评估报告</h4>
                <div class="risk-level-badge risk-${riskResult.level}">${riskResult.level}</div>
            </div>
            
            <div class="device-info-section">
                <h5>设备基本信息</h5>
                <table class="info-table">
                    <tr><td><strong>设备名称：</strong></td><td>${escapeHtml(device.name)}</td></tr>
                    <tr><td><strong>IP地址：</strong></td><td>${escapeHtml(device.ip)}</td></tr>
                    <tr><td><strong>MAC地址：</strong></td><td>${escapeHtml(device.mac)}</td></tr>
                    <tr><td><strong>设备类型：</strong></td><td>${escapeHtml(device.type)}</td></tr>
                    <tr><td><strong>操作系统：</strong></td><td>${osInfo}</td></tr>
                    <tr><td><strong>设备品牌：</strong></td><td>${brandInfo}</td></tr>
                    <tr><td><strong>设备状态：</strong></td><td>${device.status}</td></tr>
                    <tr><td><strong>国产标识：</strong></td><td>${device.isDomestic ? '是' : '否'}</td></tr>
                </table>
                <div style="margin-top: 10px;">
                    <button class="btn btn-info btn-small" onclick="manualDetectSingleBrand(${deviceIndex})">
                        <i class="fas fa-search"></i> 手动识别品牌
                    </button>
                </div>
            </div>
            
            <div class="risk-summary-section">
                <h5>风险评估结果</h5>
                <div class="score-circle" style="background: conic-gradient(#ea4335 0% ${riskResult.score * 33.33}%, #f5f5f5 ${riskResult.score * 33.33}% 100%);">
                    <span class="score-value">${riskResult.score}</span>
                    <span class="score-label">风险等级</span>
                </div>
                <p><strong>综合风险等级：</strong><span class="risk-${riskResult.level}">${riskResult.level}</span></p>
            </div>
            
            <div class="risk-details-section">
                <h5>风险端口/服务详情</h5>
    `;
    
    if (riskResult.details.highRiskPorts.length > 0) {
        reportHtml += `
            <div class="risk-category">
                <h6><i class="fas fa-exclamation-triangle"></i> 高风险端口 (${riskResult.details.highRiskPorts.length}个)</h6>
                <p><span class="risk-high">${riskResult.details.highRiskPorts.join(', ')}</span></p>
            </div>
        `;
    }
    
    if (riskResult.details.mediumRiskPorts.length > 0) {
        reportHtml += `
            <div class="risk-category">
                <h6><i class="fas fa-exclamation-circle"></i> 中风险端口 (${riskResult.details.mediumRiskPorts.length}个)</h6>
                <p><span class="risk-medium">${riskResult.details.mediumRiskPorts.join(', ')}</span></p>
            </div>
        `;
    }
    
    if (riskResult.details.lowRiskPorts.length > 0) {
        reportHtml += `
            <div class="risk-category">
                <h6><i class="fas fa-info-circle"></i> 低风险端口 (${riskResult.details.lowRiskPorts.length}个)</h6>
                <p>${riskResult.details.lowRiskPorts.join(', ')}</p>
            </div>
        `;
    }
    
    reportHtml += `
            <div class="security-recommendations">
                <h5><i class="fas fa-lightbulb"></i> 安全加固建议</h5>
                <ul class="recommendations">
    `;
    
    if (riskResult.details.highRiskPorts.length > 0) {
        reportHtml += `<li><strong>立即处置：</strong>关闭高危端口：${riskResult.details.highRiskPorts.join(', ')}</li>`;
    }
    
    if (riskResult.details.mediumRiskPorts.length > 0) {
        reportHtml += `<li><strong>近期处置：</strong>对中风险端口进行安全加固</li>`;
    }
    
    reportHtml += `
                    <li><strong>常规措施：</strong>定期更新系统和应用补丁</li>
                    <li><strong>常规措施：</strong>配置强密码策略，避免使用默认密码</li>
                    <li><strong>常规措施：</strong>启用防火墙，仅允许必要的网络访问</li>
                    <li><strong>常规措施：</strong>定期进行安全扫描和风险评估</li>
                </ul>
            </div>
        </div>
        
        <div class="report-footer">
            <p><small>报告生成时间：${new Date().toLocaleString('zh-CN')}</small></p>
        </div>
    `;
    
    document.getElementById('statsContent').innerHTML = reportHtml;
    document.getElementById('statsTitle').textContent = '设备风险评估详情';
    showModal('statsModal');
}

// 导出HTML安全报告
function exportHtmlReport() {
    const validDevices = devices.filter(device => {
        const mac = device.mac || '';
        return mac && mac !== '00:00:00:00:00:00' && mac !== '' && mac !== '未知';
    });
    
    if (validDevices.length === 0) {
        showToast('没有有效数据可以导出（所有设备均无MAC地址）', 'error');
        return;
    }
    
    const now = new Date();
    const dateStr = now.toLocaleString('zh-CN');
    
    // 统计信息
    const totalDevices = validDevices.length;
    const onlineCount = validDevices.filter(d => d.status === '在线').length;
    const offlineCount = validDevices.filter(d => d.status === '离线').length;
    const domesticCount = validDevices.filter(d => d.isDomestic).length;
    const domesticPercent = totalDevices > 0 ? Math.round((domesticCount / totalDevices) * 100) : 0;
    
    const highRiskCount = validDevices.filter(d => d.securityRisk === '高风险').length;
    const mediumRiskCount = validDevices.filter(d => d.securityRisk === '中风险').length;
    const lowRiskCount = validDevices.filter(d => d.securityRisk === '低风险').length;
    const noRiskCount = validDevices.filter(d => d.securityRisk === '无风险').length;
    
    const reportHtml = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>网络安全分析报告 v2.7.3</title>
        <style>
            body { font-family: 'Microsoft YaHei', sans-serif; line-height: 1.6; padding: 20px; }
            h1, h2, h3 { color: #1a73e8; }
            table { width: 100%; border-collapse: collapse; margin: 15px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #1a73e8; color: white; }
            .risk-high { color: #ea4335; font-weight: bold; }
            .risk-medium { color: #f9ab00; font-weight: bold; }
            .risk-low { color: #34a853; font-weight: bold; }
            .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; text-align: center; color: #666; }
        </style>
    </head>
    <body>
        <h1>网络安全分析报告 v2.7.3</h1>
        <p>生成时间: ${dateStr} | 系统版本: ${SYSTEM_VERSION} | 维护人员: msyg</p>
        
        <h2>总体概况</h2>
        <p>共分析 ${totalDevices} 台有效设备，其中：</p>
        <ul>
            <li>在线设备: ${onlineCount} 台</li>
            <li>离线设备: ${offlineCount} 台</li>
            <li>国产设备: ${domesticCount} 台 (${domesticPercent}%)</li>
            <li>高风险设备: ${highRiskCount} 台</li>
            <li>中风险设备: ${mediumRiskCount} 台</li>
            <li>低风险设备: ${lowRiskCount} 台</li>
            <li>无风险设备: ${noRiskCount} 台</li>
        </ul>
        
        <h2>高风险设备列表</h2>
        <table>
            <tr>
                <th>设备名称</th>
                <th>IP地址</th>
                <th>设备类型</th>
                <th>国产标识</th>
                <th>品牌</th>
                <th>高风险端口</th>
            </tr>
            ${validDevices.filter(d => d.securityRisk === '高风险').map(device => {
                const highRiskPorts = device.riskDetails?.highRiskPorts || [];
                const brand = extractBrandFromNotes(device.notes);
                return `
                    <tr>
                        <td>${escapeHtml(device.name)}</td>
                        <td>${escapeHtml(device.ip)}</td>
                        <td>${escapeHtml(device.type)}</td>
                        <td>${device.isDomestic ? '国产' : '非国产'}</td>
                        <td>${brand}</td>
                        <td>${highRiskPorts.join(', ') || '无'}</td>
                    </tr>
                `;
            }).join('')}
        </table>
        
        <div class="footer">
            <p>© 2025 网络安全分析系统 | 版本: ${SYSTEM_VERSION}</p>
            <p>本报告由网络设备安全分析报告系统自动生成</p>
        </div>
    </body>
    </html>
    `;
    
    // 创建下载链接
    const blob = new Blob([reportHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `网络安全报告_${now.toISOString().slice(0, 10)}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast('HTML安全报告导出成功！', 'success');
}

// 导出DOC安全报告
function exportDocReport() {
    // 简单实现：导出与HTML相同的内容，但使用.doc扩展名
    exportHtmlReport(); // 暂时使用相同的实现
    showToast('DOC安全报告导出成功！', 'success');
}

// 导出数据
function exportData() {
    const validDevices = devices.filter(device => {
        const mac = device.mac || '';
        return mac && mac !== '00:00:00:00:00:00' && mac !== '' && mac !== '未知';
    });
    
    if (validDevices.length === 0) {
        showToast('没有有效数据可以导出（所有设备均无MAC地址）', 'error');
        return;
    }
    
    const dataToExport = {
        devices: validDevices,
        scanData: scanData,
        exportTime: new Date().toISOString(),
        version: SYSTEM_VERSION,
        maintainer: 'msyg'
    };
    
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `网络安全分析数据_${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showToast(`数据导出成功，共导出 ${validDevices.length} 个有效设备数据`, 'success');
}

// 显示统计详情
function showStats(type) {
    const validDevices = devices.filter(device => {
        const mac = device.mac || '';
        return mac && mac !== '00:00:00:00:00:00' && mac !== '' && mac !== '未知';
    });
    
    let title = '';
    let content = '';
    
    if (type === 'status') {
        title = '设备状态统计';
        const onlineCount = validDevices.filter(d => d.status === '在线').length;
        const offlineCount = validDevices.filter(d => d.status === '离线').length;
        
        content = `
            <h4>设备状态分布</h4>
            <p>在线设备: ${onlineCount} 台</p>
            <p>离线设备: ${offlineCount} 台</p>
        `;
    } else if (type === 'risk') {
        title = '安全风险分布';
        const highRiskCount = validDevices.filter(d => d.securityRisk === '高风险').length;
        const mediumRiskCount = validDevices.filter(d => d.securityRisk === '中风险').length;
        const lowRiskCount = validDevices.filter(d => d.securityRisk === '低风险').length;
        const noRiskCount = validDevices.filter(d => d.securityRisk === '无风险').length;
        
        content = `
            <h4>安全风险统计</h4>
            <p>高风险设备: ${highRiskCount} 台</p>
            <p>中风险设备: ${mediumRiskCount} 台</p>
            <p>低风险设备: ${lowRiskCount} 台</p>
            <p>无风险设备: ${noRiskCount} 台</p>
        `;
    } else if (type === 'deviceType') {
        title = '设备类型分布';
        const typeCounts = {
            '计算机': validDevices.filter(d => d.type === '计算机').length,
            '打印机': validDevices.filter(d => d.type === '打印机').length,
            '路由器': validDevices.filter(d => d.type === '路由器').length,
            '交换机': validDevices.filter(d => d.type === '交换机').length,
            '服务器': validDevices.filter(d => d.type === '服务器').length,
            '其他': validDevices.filter(d => d.type === '其他').length
        };
        
        content = `
            <h4>设备类型统计</h4>
            <p>计算机: ${typeCounts['计算机']} 台</p>
            <p>打印机: ${typeCounts['打印机']} 台</p>
            <p>路由器: ${typeCounts['路由器']} 台</p>
            <p>交换机: ${typeCounts['交换机']} 台</p>
            <p>服务器: ${typeCounts['服务器']} 台</p>
            <p>其他: ${typeCounts['其他']} 台</p>
        `;
    } else if (type === 'domestic') {
        title = '国产设备比例';
        const domesticCount = validDevices.filter(d => d.isDomestic).length;
        const foreignCount = validDevices.length - domesticCount;
        
        content = `
            <h4>国产设备统计</h4>
            <p>国产设备: ${domesticCount} 台</p>
            <p>非国产设备: ${foreignCount} 台</p>
            <p>总计: ${validDevices.length} 台</p>
        `;
    }
    
    document.getElementById('statsTitle').textContent = title;
    document.getElementById('statsContent').innerHTML = content;
    showModal('statsModal');
}

// ==================== 导入数据功能 ====================

// 显示导入数据模态框
function showImportModal() {
    document.getElementById('importFileInputModal').value = '';
    document.getElementById('importPreview').style.display = 'none';
    document.getElementById('importDataPreview').textContent = '';
    showModal('importModal');
}

// 预览导入数据
function previewImportData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const content = e.target.result;
            const importedData = JSON.parse(content);
            
            // 验证数据格式
            if (!importedData.devices || !Array.isArray(importedData.devices)) {
                document.getElementById('importDataPreview').textContent = 
                    '错误：文件格式不正确，无法解析设备数据。\n请确保这是从本系统导出的JSON文件。';
                return;
            }
            
            // 显示预览
            const previewText = `
文件: ${file.name} (${(file.size/1024).toFixed(2)} KB)
设备数量: ${importedData.devices.length}
扫描记录: ${importedData.scanData ? importedData.scanData.length : 0}
导出时间: ${importedData.exportTime ? new Date(importedData.exportTime).toLocaleString('zh-CN') : '未知'}
版本: ${importedData.version || '未知'}
            `;
            
            document.getElementById('importDataPreview').textContent = previewText;
            document.getElementById('importPreview').style.display = 'block';
            
        } catch (error) {
            console.error('解析导入文件时出错:', error);
            document.getElementById('importDataPreview').textContent = 
                `错误：文件解析失败，请确保这是有效的JSON文件。\n${error.message}`;
            document.getElementById('importPreview').style.display = 'block';
        }
    };
    
    reader.onerror = function() {
        document.getElementById('importDataPreview').textContent = '错误：读取文件失败';
        document.getElementById('importPreview').style.display = 'block';
    };
    
    reader.readAsText(file);
}

// 确认导入数据
function confirmImport() {
    const fileInput = document.getElementById('importFileInputModal');
    const file = fileInput.files[0];
    
    if (!file) {
        showToast('请选择要导入的文件', 'warning');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const content = e.target.result;
            const importedData = JSON.parse(content);
            
            // 验证数据格式
            if (!importedData.devices || !Array.isArray(importedData.devices)) {
                showToast('导入失败：文件格式不正确，无法解析设备数据', 'error');
                return;
            }
            
            // 询问用户如何处理导入的数据
            const importMessage = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-file-import" style="font-size: 3rem; color: #1a73e8; margin-bottom: 15px;"></i>
                    <h4 style="margin-bottom: 10px;">确认导入数据</h4>
                    <p>即将导入的数据包含：</p>
                    <ul style="text-align: left; margin-left: 30px; margin-bottom: 20px;">
                        <li>设备数量: ${importedData.devices.length} 个</li>
                        <li>扫描记录: ${importedData.scanData ? importedData.scanData.length : 0} 条</li>
                        <li>数据版本: ${importedData.version || '未知'}</li>
                    </ul>
                    <p>请选择导入方式：</p>
                </div>
            `;
            
            // 创建自定义确认对话框
            const confirmImportModal = document.createElement('div');
            confirmImportModal.className = 'modal';
            confirmImportModal.style.display = 'flex';
            confirmImportModal.innerHTML = `
                <div class="modal-content" style="max-width: 500px;">
                    <div class="modal-header">
                        <h3><i class="fas fa-exclamation-circle"></i> 确认导入数据</h3>
                        <button class="close-btn" id="closeImportConfirmBtn">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${importMessage}
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="cancelImportConfirmBtn">取消</button>
                        <button class="btn btn-warning" id="mergeImportBtn">合并数据</button>
                        <button class="btn btn-danger" id="replaceImportBtn">替换数据</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(confirmImportModal);
            document.body.style.overflow = 'hidden';
            
            // 绑定事件
            document.getElementById('closeImportConfirmBtn').addEventListener('click', () => {
                document.body.removeChild(confirmImportModal);
                document.body.style.overflow = '';
            });
            
            document.getElementById('cancelImportConfirmBtn').addEventListener('click', () => {
                document.body.removeChild(confirmImportModal);
                document.body.style.overflow = '';
                showToast('导入已取消', 'info');
            });
            
            document.getElementById('mergeImportBtn').addEventListener('click', () => {
                // 合并数据
                const originalCount = devices.length;
                const originalScanCount = scanData.length;
                
                // 合并设备数据
                importedData.devices.forEach(newDevice => {
                    // 检查是否重复
                    const duplicateInfo = checkDeviceDuplicate(newDevice);
                    if (duplicateInfo.hasDuplicate) {
                        // 合并重复设备
                        mergeDuplicateDevice(newDevice, duplicateInfo.duplicateIndex);
                    } else {
                        devices.push(newDevice);
                    }
                });
                
                // 合并扫描数据
                if (importedData.scanData && Array.isArray(importedData.scanData)) {
                    importedData.scanData.forEach(newScan => {
                        const existingIndex = scanData.findIndex(scan => 
                            scan.ip === newScan.ip && 
                            scan.type === newScan.type && 
                            scan.detail === newScan.detail
                        );
                        
                        if (existingIndex !== -1) {
                            scanData[existingIndex] = newScan;
                        } else {
                            scanData.push(newScan);
                        }
                    });
                }
                
                // 更新UI
                mergeDataAndUpdate();
                saveToLocalStorage();
                
                const addedDevices = devices.length - originalCount;
                const addedScans = scanData.length - originalScanCount;
                
                document.body.removeChild(confirmImportModal);
                document.body.style.overflow = '';
                hideModal('importModal');
                
                showToast(`数据合并成功！新增 ${addedDevices} 个设备，${addedScans} 条扫描记录`, 'success');
            });
            
            document.getElementById('replaceImportBtn').addEventListener('click', () => {
                // 替换数据
                devices = importedData.devices;
                scanData = importedData.scanData || [];
                
                // 更新UI
                mergeDataAndUpdate();
                saveToLocalStorage();
                
                document.body.removeChild(confirmImportModal);
                document.body.style.overflow = '';
                hideModal('importModal');
                
                showToast(`数据替换成功！共导入 ${devices.length} 个设备，${scanData.length} 条扫描记录`, 'success');
            });
            
        } catch (error) {
            console.error('导入数据时出错:', error);
            showToast('导入失败：文件解析错误，请确保这是有效的JSON文件', 'error');
        }
    };
    
    reader.onerror = function() {
        showToast('读取文件失败', 'error');
    };
    
    reader.readAsText(file);
}