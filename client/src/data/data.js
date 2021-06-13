export const url = 'http://localhost:5000/search/';

export const heads = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-User': '?1',
  'Upgrade-Insecure-Requests': '1'
}

// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// Accept-Encoding: gzip, deflate, br
// Accept-Language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7
// Connection: keep-alive
// Cookie: yandexuid=3886930111623520226; yuidss=3886930111623520226; i=cScwpjt5GBD/6WERPZ2Z13g1ZJZGGUbl3pBC+UqZswpnCdGi1VvdshwJKOGEV3CkNkrR4iNxfRvu7/+yujgnn2/8i2w=; ymex=1938880226.yrts.1623520226#1938880226.yrtsi.1623520226; gdpr=0; _ym_uid=1623520226946953227; _ym_d=1623520226; _ym_isad=2; _ym_visorc=w; spravka=dD0xNjIzNTIwMjQ5O2k9OTUuMTA1LjgyLjUwO3U9MTYyMzUyMDI0OTk2MzUyNzk4OTtoPTRkNjg4NGVjYjdlMzk3ZjA4OTMzYTdlMmExNmIzY2Y0; skid=7449063911623520249; visits=1623520249-1623520249-1623520249; cmp-merge=true; reviews-merge=true; js=1; ugcp=1; dcm=1; currentRegionId=213; currentRegionName=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D1%83; mOC=1; yandexmarket=48; fonts-loaded=1; is_gdpr=0; is_gdpr_b=CITuCxD0Mw==; parent_reqid_seq=1623520249979%2F5e045f3426dd08a19a22c94395c40500%2C1623520293038%2F1d7e28042404ea2138285a4695c40500
// Host: market.yandex.ru
// sec-ch-ua: "Chromium";v="91", " Not;A Brand";v="99"
// sec-ch-ua-mobile: ?0
// Sec-Fetch-Dest: document
// Sec-Fetch-Mode: navigate
// Sec-Fetch-Site: none
// Sec-Fetch-User: ?1
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4469.0 Safari/537.36

export const paramsParseLaminate = {
  "link": "https://market.yandex.ru/catalog--laminat/18060986/list?cpa=0&hid=91640&onstock=1&how=aprice&local-offers-first=0",
  "card": "article[data-zone-name='snippet-cell']",
  "title": "span[data-tid='ce80a508']",
  "imgUrl": "img._2DyHt9sctH",
  "linkEl": "h3[data-zone-name='title']>a",
  "price": "span[data-autotest-currency='₽']>span",
  "end": "div._2UK6LnxjkG"
};

export const paramsParseParquet = {
  "link": "https://market.yandex.ru/catalog--parketnaia-doska/18060983/list?cpa=0&cvredirect=3&hid=91637&how=aprice&glfilter=7270185%3A7270187&onstock=1&local-offers-first=0",
  "card": "article[data-zone-name='snippet-cell']",
  "title": "span[data-tid='ce80a508']",
  "imgUrl": "img._2DyHt9sctH",
  "linkEl": "h3[data-zone-name='title']>a",
  "price": "span[data-autotest-currency='₽']>span",
  "end": "div._2UK6LnxjkG"
};

export const paramsParseLinoleum = {
  "link": "https://market.yandex.ru/catalog--linoleum/18060985/list?cpa=0&cvredirect=3&hid=91638&how=aprice&glfilter=13062689%3A13062691&onstock=1&local-offers-first=0",
  "card": "article[data-zone-name='snippet-cell']",
  "title": "span[data-tid='ce80a508']",
  "imgUrl": "img._2DyHt9sctH",
  "linkEl": "h3[data-zone-name='title']>a",
  "price": "span[data-autotest-currency='₽']>span",
  "end": "div._2UK6LnxjkG"
};

export const paramsParseBacking = {
  "link": "https://market.yandex.ru/catalog--podlozhka/18060980/list?cpa=0&cvredirect=3&hid=12938400&how=aprice&glfilter=13076807%3A13076815%2C16419031&onstock=1&local-offers-first=0",
  "card": "article[data-zone-name='snippet-cell']",
  "title": "span[data-tid='ce80a508']",
  "imgUrl": "img._2DyHt9sctH",
  "linkEl": "h3[data-zone-name='title']>a",
  "price": "span[data-autotest-currency='₽']>span",
  "end": "div._2UK6LnxjkG"
};
