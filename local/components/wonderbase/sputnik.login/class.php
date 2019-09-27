<?php


class WondarbaseSputnikLoginComponent extends \CBitrixComponent
{
    public function onPrepareComponentParams($arParams)
    {
        if (empty($arParams['API_SERVER']))
            $arParams['API_SERVER'] = 'https://bm.sptnk.co';

        return $arParams;
    }

    public function executeComponent()
    {
        $this->includeComponentTemplate();
    }
}