# Инструкция по запуску системы с внешнего USB диска

1. Запишите образ ОС c Home Assistant, поставляемый в комплекте на внешний USB диск - [скачать](https://umdu.ru/umdu_k1.img.gz)

2. Подключите внешний диск в USB порт

3. Подключитесь к серверу по SSH

4. Выполните команду и следуйте инструкциям: 
   ```bash
   curl -O https://raw.githubusercontent.com/dusikasss/umdu_ssd_usb/main/install_to_usb.sh && chmod +x install_to_usb.sh && sudo ./install_to_usb.sh
   ```

5. Выполните команду:
   ```bash
   systemctl enable armbian-resize-filesystem.service
   ```

6. Выполните команду:
   ```bash
   reboot
   ```