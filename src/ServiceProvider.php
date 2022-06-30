<?php

namespace Edgebranding\Seotools;

use Statamic\Providers\AddonServiceProvider;
use Edgebranding\Seotools\Fieldtypes\SeoTools;

class ServiceProvider extends AddonServiceProvider
{
    public function bootAddon()
    {
    }

    protected $fieldtypes = [
        SeoTools::class,
    ];

    protected $scripts = [
        __DIR__.'/../dist/js/cp.js',
    ];
}
