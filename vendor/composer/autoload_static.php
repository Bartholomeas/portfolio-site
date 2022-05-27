<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInited4c2f2b7ea028748751e6240cc8b780
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInited4c2f2b7ea028748751e6240cc8b780::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInited4c2f2b7ea028748751e6240cc8b780::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInited4c2f2b7ea028748751e6240cc8b780::$classMap;

        }, null, ClassLoader::class);
    }
}
