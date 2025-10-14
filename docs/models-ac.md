# Поддерживаемые модели кондиционеров

Следующие модели кондиционеров поддерживают работу с модулем umdu ac.

## Поиск по бренду

<input id="brand-filter" type="text" placeholder="Поиск бренда..." style="padding:8px 10px; width: 100%; max-width: 420px; border: 1px solid var(--vp-c-divider); border-radius: 6px;"
oninput="(function(v){const val=(v||'').toLowerCase().trim();document.querySelectorAll('.brand-table tbody tr').forEach(function(tr){var brand=(tr.querySelector('td')?.textContent||'').toLowerCase();tr.style.display=(val===''||brand.includes(val))?'':'none';});})(this.value)" />

## AUX (UART)

<table class="brand-table">
  <thead>
    <tr><th>Бренд</th><th>Серии</th></tr>
  </thead>
  <tbody>
    <tr><td>ANDE</td><td>AND-xx/FA+</td></tr>
    <tr><td>Argo</td><td>Greenstyle</td></tr>
    <tr><td>AUX</td><td>AL-Hxx/xxDRxxAU, ALCA-Hxx/xxDRxxA, ALMD-Hxx/xxDRxx/AL, ALLD-Hxx/4R1C, AL-Hxx/4R1C(U), ALMD-Hxx/5DR2, AL-Hxx/5DR2(U), ALMD-Hxx/4DR2A, AL-Hxx/4DR2A(U), AMWM-Hxx/4R1 (multisplit), AMWM-Hxx/4R2(J) (multisplit), AMWM-Hxx/4R3 (multisplit), ASM-HxxLL, ASM-HxxLD, ASW-xxA3INV/SS, ASW-HxxA4/DE-RxDI, ASW-HxxA4/FP-RxDI, ASW-HxxA4/JD-Rx, ASW-HxxA4/JD-RxDI, ASW-HxxA4/LK-700Rx, ASW-HxxA4/LK-700RxDI, ASW-HxxB4/JD-RxDI, ASW-HxxB4/LK-700Rx, ASW-HxxB7A4, ASW-HxxA4/FARx, ASW-HxxA4/HA-RxDI, ASW-HxxC5C4/JERxDI-Bx, ASW-HxxC5C4/JORxDI-Bx, ASW-HxxU3/JIRxDI-US, ASW-HxxE3A4, AS-HxxA4/QH-RxDI, ASW-HxxA4/QH-RxDI, AUX-xxJO/I/A, AUX-xxCAA/I, ASW-HxxA4/CARxDI-Cx, AUX-xxF3H, AUX-xxQC/I, AUX-xxQC/O, AUXxx, AWG-HxxIN, AWG-HxxVi, AWM-xxG1V4-X, HA-xxxxxBTU, BPxx, Fxx, GWxx, HMxx, HNxx, KFR-xx/I, KFR-xxGW/BpQYAxx+xxR3, KFR-xxGW/BpQYDxx+xxR3, KFR-xxGW/BpR3QYAxx+xx, KFR-xxGW/BpR3QYDxx+xx, KFR-xxGW/BpR3QYQxx+xx, KFR-xxGW/BpHRB+3, KFR-xxGW/BpRxxQYAxx+xx, KFR-xxGW/BpRxxQYDxx+xx, KFR-xxGW/BpRxxQYQxx+xx, AUX-M3-xxLCLH (multisplit)</td></tr>
    <tr><td>Ballu</td><td>BLC_CF/in-xxHNxx/BLC_O/out-xxHNxx, BSUI/in-xxHNxx/BSUI/out-xxHNxx, BSUP/in-xxHNxx/BSUP/out-xxHNxx, BSW/in-xxHNxx/BSW/out-xxHNxx, BSW/out-xxHNxx_xxY, Orbis BPAC-xx</td></tr>
    <tr><td>Baymak</td><td>Elegant Plus</td></tr>
    <tr><td>Centec</td><td>CT-xxFDCxx</td></tr>
    <tr><td>Centek</td><td>CT-xxAxx, CT-xxEDCxx, CT-xxFDCxx, CT-xxFxx, CT-xxJxx, CT-xxRDCxx, CT-xxSDCxx, CT-xxUxx, CT-xxVxx, CT-xxXxx, CT-xxZxx</td></tr>
    <tr><td>Dimstal</td><td>SMND-QC-xx-J-Smart ECO</td></tr>
    <tr><td>Electrolux</td><td>Onix Super DC EACS/I-xxHIX-BLACK/Nxx</td></tr>
    <tr><td>Elgin</td><td>HWFIxxBxxIA/HWFExxBxxNA</td></tr>
    <tr><td>Energolux</td><td>SASxxBNxx-AI, SASxxBxx-A, SASxxLxx-A, SASxxMxx-AI, SASxxZxx-AI</td></tr>
    <tr><td>Hyundai</td><td>H-ARxx-xxH</td></tr>
    <tr><td>ICG</td><td>RAS-VxxNQR/RAC-VxxNQR</td></tr>
    <tr><td>iClima</td><td>ICI-xxA/IUI-xxA</td></tr>
    <tr><td>Idea</td><td>ISR-xxHR-SAxx-DNxx ION</td></tr>
    <tr><td>IGC</td><td>RAK-xxNH multysplit, RAS-VxxNxxX/RAC-VxxNxxX, RAS-xxAX/RAC-xxAX</td></tr>
    <tr><td>IKON</td><td>I/O-xxHNxx</td></tr>
    <tr><td>Ishimatsu</td><td>IS-xxHR-ILxx</td></tr>
    <tr><td>Loriot</td><td>LAC-xxASM/LAC-xxAS, LAC-xxSSM/LAC-xxSS, Lorxx, Lor-xxHS, Lor-xxIS</td></tr>
    <tr><td>Mirage</td><td>VEXxxIV, VEXxxIY</td></tr>
    <tr><td>Osaka</td><td>OSG-xxRSxx</td></tr>
    <tr><td>Pioneer</td><td>BItxxVi, CB××, CYB××, WYSxx</td></tr>
    <tr><td>POLARIS</td><td>PWS-xx</td></tr>
    <tr><td>Roda</td><td>RS-xxFxx, RS-xxHxx</td></tr>
    <tr><td>Royal Clima</td><td>CO-D xxHNI/CO-E xxHNI</td></tr>
    <tr><td>Shivaki</td><td>SSHxxHxx</td></tr>
    <tr><td>Shivaki (портаб.)</td><td>SAC-xxTN/SAC-xxTNM</td></tr>
    <tr><td>Solin</td><td>SVDxx</td></tr>
    <tr><td>TecnoClima</td><td>LC-xx</td></tr>
    <tr><td>Tesler</td><td>ISA-xx</td></tr>
    <tr><td>Turboklim</td><td>TKO-xx</td></tr>
    <tr><td>Venterra</td><td>VSD-xxHR1</td></tr>
    <tr><td>VERTEX</td><td>VRIO-xx</td></tr>
    <tr><td>Voltas</td><td>SAC-xx</td></tr>
    <tr><td>WEST</td><td>WAC-xx</td></tr>
    <tr><td>Wigmore</td><td>WMS-xx</td></tr>
    <tr><td>Yuejin</td><td>KFR-xx</td></tr>
    <tr><td>Zanussi</td><td>ZACS-xx H/N1</td></tr>
    <tr><td>Бирюса</td><td>B-xxDPR/B-xxDPQ, B-xxFIR/B-xxFIQ</td></tr>
    <tr><td>Лориот</td><td>LAC-xxASM/LAC-xxAS, LAC-xxSSM/LAC-xxSS</td></tr>
    <tr><td>РБТ</td><td>RAC-xxHNxx</td></tr>
    <tr><td>Centek/прочие ребренды</td><td>Набор серий CT-… (см. выше)</td></tr>
  </tbody>
  </table>

## Midea (UART / RS-485 (зависит от модели))

<table class="brand-table">
  <thead>
    <tr><th>Бренд</th><th>Серии</th></tr>
  </thead>
  <tbody>
    <tr><td>Alpine Home Air</td><td>Blueridge Ductless BMxxMCCG, Blueridge Ductless BMxxMCD</td></tr>
    <tr><td>Artel</td><td>Multisplit AMXDxxRPxx</td></tr>
    <tr><td>Ballu</td><td>BSD/in-xxHNxx_xxY</td></tr>
    <tr><td>Beko</td><td>BRWPGxx</td></tr>
    <tr><td>Comfee</td><td>MSAFA-xxHRNxx-QCxx</td></tr>
    <tr><td>Electrolux</td><td>EACS/I-xxHAT/Nxx, SIRIUS-xxE IU</td></tr>
    <tr><td>Idea</td><td>ISR-xxHR-MAxx-DNxx</td></tr>
    <tr><td>Inventor</td><td>Aria ARxxMVI, Aria ARxxMVI-S, Passion PxxVIxx</td></tr>
    <tr><td>Midea</td><td>MAWxxVxxQWT, MSAFB-xxHRDNxx-QCxx, Mission MBxxNxxDxx</td></tr>
    <tr><td>Mr. Cool</td><td>DIY-xx-HP-WMAH-xxB, DIY-xx-WMAH-HP-xxA</td></tr>
    <tr><td>Olimpia Splendid</td><td>Nexa SxxE</td></tr>
    <tr><td>Pioneer</td><td>WYSxx</td></tr>
    <tr><td>QLIMA</td><td>SC-JAxx</td></tr>
    <tr><td>Royal Clima</td><td>Triumph Inverter RCI-TMxxHN</td></tr>
    <tr><td>Toshiba</td><td>RAC-WKxxESCWRU</td></tr>
    <tr><td>Airwell / Ferroli / YORK</td><td>Совместимые линейки (см. таблицу; серии зависят от подбренда/рынка)</td></tr>
  </tbody>
</table>

## SmartAir2 (Haier) (UART)

<table class="brand-table">
  <thead>
    <tr><th>Бренд</th><th>Серии</th></tr>
  </thead>
  <tbody>
    <tr><td>Haier</td><td>Nebula White, Tundra 2.0, Dawn, Flair, Console (Column)</td></tr>
  </tbody>
</table>

::: info Инфо
Для SmartAir2 (Haier) совместимость зависит от поколения платы и Wi‑Fi‑модуля. Старые модели со Smart Air 2 (например, Nebula White, Тундра 2.0) работают по протоколу SmartAir2; более новые серии могут использовать hOn (другой протокол). Перед покупкой ориентируйтесь на упоминание приложения “Haier Smart Air 2” в описании изделия/инструкции.
:::

::: tip Примечание
Если вашей модели нет в списке, это не означает, что она не поддерживается. Многие кондиционеры используют одинаковые протоколы связи, поэтому модуль может работать и с другими моделями.
:::
