# Список поддерживаемых котлов

Ниже собраны модели котлов с поддержкой `OpenTherm`, которые можно использовать с модулем umdu ot.

Список не полный и может уточняться.

::: tip Примечание
Перед подключением нужно проверить инструкцию именно для вашей модели котла. OpenTherm в руководствах может быть обозначен как OpenTherm, OT, подключение внешнего или комнатного термостата, а иногда как подключение пульта дистанционного управления или похожим образом.

Часто подключение сводится к снятию штатной перемычки и подключению двух проводов шины. На части котлов разъем OpenTherm вынесен отдельно от клемм термостата, в том числе на некоторых моделях BAXI. Также может потребоваться включить нужный режим в сервисном меню или выставить DIP-переключатели на плате.
:::

## Поиск по бренду

<input id="brand-filter" type="text" placeholder="Поиск бренда..." style="padding:8px 10px; width: 100%; max-width: 420px; border: 1px solid var(--vp-c-divider); border-radius: 6px;"
oninput="(function(v){const val=(v||'').toLowerCase().trim();document.querySelectorAll('.vp-doc table tbody tr').forEach(function(tr){var brand=(tr.querySelector('td')?.textContent||'').toLowerCase();tr.style.display=(val===''||brand.includes(val))?'':'none';});})(this.value)" />

| Фирма | Серия | Примечание |
| --- | --- | --- |
| ACV | Kompakt HR/HRE Eco / Kompakt HRE Eco | Вероятность высокая: модель есть в нескольких практических списках. |
| БалтГаз / BaltGaz | Turbo E | Вероятность высокая: модель есть в нескольких практических списках. |
| БалтГаз / BaltGaz | Turbo S | Вероятность высокая: модель есть в нескольких практических списках. |
| Baltur | Tesis / Tesis Pro | Вероятность высокая: модель есть в нескольких практических списках. |
| Beretta | CIAO | Вероятность высокая: модель есть в нескольких практических списках. |
| Bosch | GAZ 2500 F / GAZ 2500F | [Инструкция](https://www.c-o-k.ru/library/instructions/bosch/gazovye-napolnye-kotly/22210/79871.pdf) |
| Bosch | WBN6000-24C (Gaz 6000 W) | [Инструкция](https://cdn.vseinstrumenti.ru/instruction/nomenclaturecontent/202006/3358451.pdf/bosch-wbn6000-24c-rn-s5700-7736900198-706033.pdf) |
| Bosch | GAZ 6000 W | [Инструкция](https://cdn.vseinstrumenti.ru/instruction/nomenclaturecontent/202006/3358451.pdf/bosch-wbn6000-24c-rn-s5700-7736900198-706033.pdf) |
| Buderus | Logamax U072 | [Инструкция](https://buderus.store/wp-content/uploads/2019/06/instrukciya_buderus_logano_u072_ru.pdf) |
| De Dietrich | Zena MS | Вероятность высокая: модель есть в нескольких практических списках. |
| De Dietrich | Zena Plus | Вероятность высокая: модель есть в нескольких практических списках. |
| De Dietrich | Naneo | Вероятность средняя: по примечанию источника с адаптером Opentherm-RTU работает хорошо, с Opentherm-PWM-RTU работает не очень. |
| De Dietrich | Vivadens | Вероятность высокая: модель есть в нескольких практических списках. |
| De Dietrich | Neovo | Вероятность средняя: поддержка указана только при использовании панелей B-Control и iniControl2. |
| De Dietrich | C330/C630 | Вероятность средняя: поддержка указана только при использовании панелей iniControl. |
| De Dietrich | MS 24-31 MI FF | Вероятность средняя: есть упоминание в одном списке. |
| De Dietrich | MSL 24-31 MI FF | Вероятность средняя: есть упоминание в одном списке. |
| Electrolux | Quantum | Вероятность высокая: модель есть в нескольких практических списках. |
| Federica Bugatti | TURBO PLUS 24/28/32 | Вероятность высокая: модель есть в нескольких практических списках. |
| Ferroli | Pegasus D 40/D45 | Вероятность высокая: модель есть в нескольких практических списках. |
| Ferroli | Pegasus D K | Вероятность средняя: есть упоминание в одном списке. |
| Ferroli | Fortuna | Вероятность средняя: в одном источнике указано, что поддержка относится к котлам, произведенным с 2020 года. |
| Ferroli | DOMI compact F24D | Вероятность высокая: модель есть в нескольких практических списках. |
| Ferroli | DIVA F24 | Вероятность высокая: модель есть в нескольких практических списках. |
| Ferroli | DOMINA N F24 | Вероятность высокая: модель есть в нескольких практических списках. |
| Ferroli | ENERGY TOP W80 | Вероятность высокая: модель есть в нескольких практических списках. |
| Ferroli | Bluehelix Tech RRT C / Bluehelix Tech RRT 28C | Вероятность средняя: есть упоминание в одном списке. |
| Ferroli | Bluehelix Tech H | Вероятность средняя: есть упоминание в одном списке. |
| Ferroli | Bluehelix K50 | Вероятность средняя: есть упоминание в одном списке. |
| Ferroli | Divatech D | Вероятность средняя: есть упоминание в одном списке. |
| Ferroli | Force W | Вероятность средняя: есть упоминание в одном списке. |
| Ferroli | Quadrifoglio B 70 | Вероятность средняя: есть упоминание в одном списке. |
| Ferroli | Vitabel | Вероятность средняя: есть упоминание в одном списке; в одном источнике указано, что поддержка относится к котлам, произведенным с 2020 года. |
| Fondital | MINORCA | Вероятность высокая: модель есть в нескольких практических списках. |
| Fondital | ITACA KC | Вероятность высокая: модель есть в нескольких практических списках. |
| Fondital | ANTEA KC | Вероятность высокая: модель есть в нескольких практических списках. |
| Fondital | FORMENTERA KC/KR | Вероятность средняя: в одном источнике указано, что перед пуском нужно выключить функцию приготовления ГВС, если она не нужна. |
| Fondital | GIAVA KRB | Вероятность высокая: модель есть в нескольких практических списках. |
| Fondital | DELFIS | Вероятность высокая: модель есть в нескольких практических списках. |
| GEFFEN | MB | Вероятность высокая: модель есть в нескольких практических списках. |
| IMMERGAS | Eolo Star 24 4R | Вероятность высокая: модель есть в нескольких практических списках. |
| IMMERGAS | Eolo Mythos M 24 4R | Вероятность высокая: модель есть в нескольких практических списках. |
| IMMERGAS | VICTRIX TERA 28 1 | Вероятность средняя: есть упоминание в одном списке. |
| Italtherm | City Class FR 25 | Вероятность средняя: есть упоминание в одном списке. |
| Kotitonttu | SUARI S24 DK | Вероятность средняя: есть упоминание в одном списке. |
| Лемакс / Lemax | PRIME-V | [Инструкция](https://cdn.vseinstrumenti.ru/instruction/nomenclaturecontent/202105/6592988.pdf/lemax-prime-v24-1656744.pdf) |
| Лемакс / Lemax | PRIME-C | [Инструкция](https://teplo3000.spb.ru/doc/kotel/tp-gazovye-kondensacionnye-kotly-lemax-prime-c.pdf) |
| Лемакс / Lemax | Wise | Вероятность высокая: модель есть в нескольких практических списках. |
| Лемакс / Lemax | Clever | Вероятность высокая: модель есть в нескольких практических списках. |
| Лемакс / Lemax | Clever-20 / Clever-30 / Clever-40 / Clever-55 | Вероятность средняя: есть упоминание в одном списке; отдельно указаны котлы, выпущенные до 2022 года. |
| Лемакс / Lemax | Titan / Titan Z | Вероятность средняя: есть упоминание в одном списке. |
| MIZUDO | M24T | Вероятность средняя: есть упоминание в одном списке. |
| MIZUDO | M11-M17T | Вероятность средняя: есть упоминание в одном списке. |
| MOGUCHI | GBL 24F | Вероятность средняя: есть упоминание в одном списке. |
| Нева Люкс / NevaLux | 72xx | [Инструкция](https://thermomir.ru/files/it/873_6470.pdf). В инструкции OpenTherm-шина обозначена как «Пульт дистанционного управления». |
| Sime | RX 26 E | Вероятность средняя: в одном источнике указано подключение на CR CN4(3-4); для правильного запуска нужно одновременно управлять перемычкой TA1 CN6(7-8). |
| Thermex | Euroelite FH13 | Вероятность средняя: есть упоминание в одном списке. |
| Thermex | Euroelite F24 | Вероятность высокая: модель есть в нескольких практических списках. |
| Thermona | EL23 | Вероятность высокая: модель есть в нескольких практических списках. |
| Thermona | DUO 50.A / T.A / FT.A | Вероятность высокая: модель есть в нескольких практических списках. |
| Thermona | 20/28 TCX, TCX.A | Вероятность высокая: модель есть в нескольких практических списках. |
| Lamborghini | ERA f45m | Вероятность высокая: модель есть в нескольких практических списках. |
| Lamborghini | AXE 3 32 R | Вероятность высокая: модель есть в нескольких практических списках. |
| Viessmann | Vitodens 100-W (WB1C) | Вероятность высокая: модель есть в нескольких практических списках. |
| Viessmann | Vitodens 100 B1HC/B1KC | Вероятность средняя: модуль OpenTherm работает, но не выключается насос котла. |
| Viessmann | Vitodens 111-W | Вероятность высокая: модель есть в нескольких практических списках. |
| Viessmann | Vitopend 100 A1HB/A1JB | Вероятность средняя: ГВС работает двухуровнево: выше 48 °C греет до 61-64 °C, ниже 48 °C не работает. |
| Viessmann | Vitopend 100 | Вероятность высокая: модель есть в нескольких практических списках. |
| WARM | AUROS | Вероятность высокая: модель есть в нескольких практических списках. |
| WOLF | FGG-K-24 | Вероятность высокая: модель есть в нескольких практических списках. |
| Зота / ZOTA | MK-S Plus | Вероятность средняя: есть упоминание в одном списке. |
| BAXI | ECO Classic | [Инструкция](https://baxi.ru/upload/iblock/2d1/6by6l35affwd3hxwcb2een48dkvrdvwp/BAXI-Connect_-s-kotlami-BAXI.pdf). В документе OpenTherm описан как комнатный термостат On/Off. |
| BAXI | SLIM | [Инструкция](https://baxi.ru/upload/iblock/2d1/6by6l35affwd3hxwcb2een48dkvrdvwp/BAXI-Connect_-s-kotlami-BAXI.pdf). Требуется интерфейсная плата; для части сценариев нужен датчик бойлера. |
| BAXI | LUNA-3 / LUNA-3 Comfort / LUNA 3 Comfort Combi | [Инструкция](https://baxi.ru/upload/iblock/2d1/6by6l35affwd3hxwcb2een48dkvrdvwp/BAXI-Connect_-s-kotlami-BAXI.pdf) |
| BAXI | Duo-tec / Duo-tec Compact / Duo-tec+ / NUVOLA Duo-tec | [Инструкция](https://baxi.ru/upload/iblock/2d1/6by6l35affwd3hxwcb2een48dkvrdvwp/BAXI-Connect_-s-kotlami-BAXI.pdf) |
| BAXI | ECO Nova / ECO Four / ECO-4S / ECO Home / ECO-5 Compact / MAIN Four / MAIN-5 / FOURTECH | [Инструкция](https://baxi.ru/upload/iblock/2d1/6by6l35affwd3hxwcb2een48dkvrdvwp/BAXI-Connect_-s-kotlami-BAXI.pdf) |
| BAXI | Power HT 1.450-1.1500 | [Инструкция](https://baxi.ru/upload/iblock/2d1/6by6l35affwd3hxwcb2een48dkvrdvwp/BAXI-Connect_-s-kotlami-BAXI.pdf) |
| BAXI | AMPERA | [Инструкция](https://baxi.ru/upload/iblock/2d1/6by6l35affwd3hxwcb2een48dkvrdvwp/BAXI-Connect_-s-kotlami-BAXI.pdf) |
| BAXI | NUVOLA-3 B40 / NUVOLA-3 Comfort | Вероятность высокая: модель есть в нескольких практических списках. |
| Bosch | WBN 6000-18/24 CR/HR N/L | Вероятность высокая: модель есть в нескольких практических списках. |
| Haier | NeoSlim / TechLine S | Вероятность высокая: модель есть в нескольких практических списках. |
| Hermes | Eomix COPA / Eomix Plus COPA / Vitopend-100W / Legasy-100W | Вероятность высокая: модель есть в нескольких практических списках. |
| Italtherm | City Class K/KR | [Инструкция](https://italtherm-russia.ru/docs/instructions/RU%20SERVICE%20CITY%20CLASS%20K-KR.pdf) |
| IMMERGAS | Nike Mythos 24 / серии STAR и MYTHOS | Вероятность высокая: модель есть в нескольких практических списках. |
| Federica Bugatti | Premium 32 / 32 B / Varme 24B / 32B / Varme 12-32 / Varme Cond 25 / 35 | Вероятность высокая: модель есть в нескольких практических списках. |
| Ferroli | Domiproject C24 / DIVAtech F24-F37 / DIVAtop HC24 / Arena / New Elite 60 F24 E / Bluehelix Maxima / Bluehelix Hitech RRT / Bluehelix Alpha / Bluehelix Tech S / Vitabel C24-C32 F10-F40 | Вероятность высокая: модель есть в нескольких практических списках. |
| Lamborghini | FL D F24/32 / SB-F24 | Вероятность высокая: модель есть в нескольких практических списках. |
| Kentatsu | Nobby Smart II | Вероятность средняя: в одном примечании модель названа аналогом Copa Eomix. |
| MIZUDO | котлы со 2 квартала 2022 | Вероятность средняя: в одном примечании указано, что со 2 квартала 2022 все котлы MIZUDO оснащаются шиной OpenTherm; там же подключение описано через разъем сухого контакта. |
| Navien | NCB700 / NCB500 / NCB LDWE-LHWE / NGB150 / NGB210 / NGB210 SYSTEM | Вероятность высокая: модель есть в нескольких практических списках. |
| Скат / SKAT | BG | Вероятность средняя: в инструкции указано разрезать перемычку Thermostat и подключить два провода термостата; явного упоминания OpenTherm нет. |
| Vaillant | VGR turboFLEX | Вероятность средняя: в одном примечании указано, что один терминал предназначен для датчика БКН, второй для OT. |
| Viessmann | Vitodens 100W Type WB1A / WB1B / B1HA / B1KA / Vitodens 200-W WB2B | Вероятность высокая: модель есть в нескольких практических списках. |
| Wester | Clever 20 | Вероятность средняя: в одном примечании модель указана как вариант Lemax Clever 20. |
| Зота / ZOTA | Lux-x / Balance / Econom / Lux / Solid / Solo / MK-S | Вероятность высокая: модель есть в нескольких практических списках. |
| Скат / SKAT | Gold | Вероятность высокая: модель есть в нескольких практических списках. |
| STOUT | SEB PLUS | Вероятность высокая: модель есть в нескольких практических списках. |
| Ferroli | Leb | Вероятность высокая: модель есть в нескольких практических списках. |
