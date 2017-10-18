## Laravel installation

### Server Requirements
    PHP >= 7.0.0
    OpenSSL PHP Extension
    PDO PHP Extension
    Mbstring PHP Extension
    Tokenizer PHP Extension
    XML PHP Extension

**step 1**

_install php version >= 7.00_

**download** [this link](http://windows.php.net/downloads/releases/php-7.1.10-nts-Win32-VC14-x86.zip)

**step 2**

_extract php zip_

![Step 2](/week04-20171012/images/step2.png)



**step 3**

_download composer_

**download** [this link](https://getcomposer.org/Composer-Setup.exe)

**step 4**

_install composer_


_choose php.exe in folder php that you extract zip_

![Step 4](/week04-20171012/images/step4.png)


_click next to finish install_


**step 5**

_open cmd and install laravel by composer_

    composer global require "laravel/installer"

![Step 5](/week04-20171012/images/step5.png)

**step 6**

_set path php in environment variable_

![Step 6](/week04-20171012/images/step6.png)

**step 7**

new project laravel by use command

    laravel new project

**step 8**

open project directory and run project laravel by use command

    php artisan serve

![Step 8-1](/week04-20171012/images/step8-1.png)


open browser and enter to http://127.0.0.1:8000

![Step 8-2](/week04-20171012/images/step8-2.png)