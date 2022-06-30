<?php

namespace Edgebranding\Seotools\Fieldtypes;

use Statamic\Fields\Fieldtype;
use Statamic\Entries\Collection;
use Statamic\Entries\Entry;
use Illuminate\Support\Facades\URL;

class SeoTools extends Fieldtype
{
    protected $icon = 'earth';
    
    /**
     * The blank/default value.
     *
     * @return array
     */
    public function defaultValue()
    {
    }

    public function preload()
    {
        if (! $entry = $this->field->parent()) {
            return [];
        }

        if ($entry instanceof Collection) {
            return [];
        }

        $site = URL::to("/");
        $entry = Entry::find($this->field->parent()->id);
        return [
            'permalink' => $site . $entry->url(),
        ];
    }

    /**
     * Pre-process the data before it gets sent to the publish page.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        return $data;
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return $data;
    }
}
