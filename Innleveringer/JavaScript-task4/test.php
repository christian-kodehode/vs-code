<?php

/*
Siste problem: hele tiere kommer ikke med for femsifra tall.
*/

Expand
tekstTilTall.php
33 KB
John Petter — Today at 8:51 AM
hvilken oppgave?
﻿
<?php

/*
Siste problem: hele tiere kommer ikke med for femsifra tall.
*/

declare(strict_types=1);

// Definerer variabelen $sInput som verdien i en string man definerer i kommandolinja når man kjører fila.
$sInput = $argv[1];

// Skriver ut resultatet av at verdien til $sInput kjøres som input-verdi i funksjonen convert0_99.
print_r(convert0_99($sInput));

/*
Funksjon som konverterer en integer mellom 1 og 1.000.000 til en string som beskriver 
tallet på form: "EN", "TO", "TRE", ... , "HUNDRE OG FIRE TUSEN NI HUNDRE OG ÅTTI SEKS", ... , "EN MILLION"
*/
function convert0_99($iTall) {
    /*
    $aInputArray er en liste hvor hvert element er hvert tegn i input-stringen (nøkkelene er 0, 1, 2, osv.).
    $iInputlength regner ut lengden på input-stringen (antall tegn).
    De neste seks linjene definerer lister (og et par ekstra ord) med alle de nødvendige begrepene vi trenger for å si tall mellom 1-1.000.000 på norsk.
    $feil er en string med en feilmelding som skrives ut når input ikke er et tall mellom 0 og 1 000 000.
    */
    $aInputArray = str_split(strval($iTall));
    $iInputLength = count($aInputArray);
    $aListOnes = ['NULL' , 'EN' , 'TO' , 'TRE' , 'FIRE' , 'FEM' , 'SEKS' , 'SYV' , 'ÅTTE' , 'NI'];
    $aListOtherOnes = ['NULL' , 'ETT' , 'TO' , 'TRE' , 'FIRE' , 'FEM' , 'SEKS' , 'SYV' , 'ÅTTE' , 'NI'];
    $aListTeens = ['TI' , 'ELLEVE' , 'TOLV' , 'TRETTEN' , 'FJORTEN' , 'FEMTEN' , 'SEKSTEN' , 'SYTTEN' , 'ATTEN' , 'NITTEN'];
    $aListTens = ['NULL' , 'TI' , 'TJUE' , 'TRETTI' , 'FØRTI' , 'FEMTI' , 'SEKSTI' , 'SYTTI' , 'ÅTTI' , 'NITTI'];
    $sHundre = "HUNDRE";
    $sTusen = "TUSEN";
    $feil = "Input må være et heltall mellom 0 og 1 000 000.";
    print_r("InputArray før løkke : ");
    print_r($aInputArray);

    // En løkke som kjører gjennom input-stringen fra første til siste tegn
    for ($i = 0; $i < $iInputLength; $i++)
    {
        /* 
        Når lengden på input-stringen er x ($i+1) så kjøres koden som ligger i case $i (x-1).
        F.esk. når lengden på input-stringen er 3 så kjøres koden som ligger i case 2.
        I hver case defineres en output-string '$sOutput' som er verdien funksjonen convert0_99() returnerer 
        som output og dermed skrives ut via print_r() i starten av fila.
        */
        switch ($i)
        {
            // Når lengden på input-stringen er 1 så defineres $sOutput som verdien i lista over enere som tilsvarer tallet i input-stringen.
            case 0:
                $sOutput = $aListOnes[$iTall];
                break;
            // Når lengden på input-stringen er 2 så defineres $sOutput utifra forskjellige kriterier definert i hver IF-setning.            
            case 1:
                // Når sifferet på tierplass er 1 så defineres $sOutput fra lista over tallene "TI, ELLEVE, ... , ATTEN, NITTEN".
                if ($aInputArray[0] == 1)
                {
                    $sOutput = (' ' . $aListTeens[$aInputArray[1]]);
                }
                else 
                {
                    // Når sifferet på tierplass ikke er 1 og sifferet på enerplass er 0 så defineres $sOutput fra lista over hele tiertall "TI, TJUE, ... , ÅTTI, NITTI".
                    if ($aInputArray[1] == 0)
                    {
                        $sOutput = (' ' . $aListTens[$aInputArray[0]]);
                    }
                    else 
                    {
                        $sOutput = (' ' . $aListTens[$aInputArray[0]] . ' ' . $aListOnes[$aInputArray[1]]);
                    }
                }
                break;
            // Når lengden på input-stringen er 2 defineres $sOutput via listene "ETT, TO, ... , ÅTTE, NI" + "EN, TO, ... , ÅTTE, NI" + "..., 
            // ELLEVE, TOLV, ... ATTEN, NITTEN" + "TI, TJUE, ... , ÅTTI, NITTI" utifra hvorvidt siffer på hundre-plass og ener-plass er 0 eller 
            // ikke og hvorvidt tallet på tier-plass er 0, 1 eller større enn 1. "HUNDRE" og "OG" er lagt til der de behøves.
            case 2:
                if ($aInputArray[1] == 0 && $aInputArray[2] == 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sHundre);
                }
                elseif ($aInputArray[1] > 0 && $aInputArray[2] == 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sHundre . ' OG ' . $aListTens[$aInputArray[1]]);
                }
                elseif ($aInputArray[1] == 1 && $aInputArray[2] > 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sHundre . ' OG ' . $aListTeens[$aInputArray[2]]);
                }
                elseif ($aInputArray[1] == 0 && $aInputArray[2] > 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sHundre . ' OG ' . $aListOnes[$aInputArray[2]]);
                }
                elseif ($aInputArray[1] > 1 && $aInputArray[2] > 0) 
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sHundre . ' OG ' . $aListTens[$aInputArray[1]] . $aListOnes[$aInputArray[2]]);
                }
                else 
                {
                    $sOutput = $feil;
                }
                break;
            // Når lengden på input-stringen er 3 defineres $sOutput via listene "ETT, TO, ... , ÅTTE, NI" + "EN, TO, ... , ÅTTE, NI" 
            // + "..., ELLEVE, TOLV, ... ATTEN, NITTEN" + "TI, TJUE, ... , ÅTTI, NITTI" utifra hvorvidt siffer på tusen-plass, hundre-plass, 
            // ener-plass er 0 eller ikke og hvorvidt tallet på tier-plass er 0, 1 eller større enn 1. "TUSEN", "HUNDRE" og "OG" er lagt til der de behøves.
            case 3:
                if ($aInputArray[1] == 0 && $aInputArray[2] == 0 && $aInputArray[3] == 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen);
                }
                elseif ($aInputArray[1] == 0 && $aInputArray[2] == 0 && $aInputArray[3] != 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . ' OG ' . $aListOnes[$aInputArray[3]]);
                }
                elseif ($aInputArray[1] != 0 && $aInputArray[2] == 0 && $aInputArray[3] == 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . ' ' . $aListOtherOnes[$aInputArray[1]] . ' ' . $sHundre);
                }
                elseif ($aInputArray[1] != 0 && $aInputArray[2] != 0 && $aInputArray[3] == 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . ' ' . $aListOtherOnes[$aInputArray[1]] . ' ' . $sHundre . " OG " . $aListTens[$aInputArray[2]]);
                }
                elseif ($aInputArray[1] == 0 && $aInputArray[2] != 0 && $aInputArray[3] == 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . " OG " . $aListTens[$aInputArray[2]]);
                }
                elseif ($aInputArray[1] == 0 && $aInputArray[2] > 1 && $aInputArray[3] != 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . " OG " . $aListTens[$aInputArray[2]] . ' ' . $aListOnes[$aInputArray[3]]);
                }
                elseif ($aInputArray[1] == 0 && $aInputArray[2] == 1 && $aInputArray[3] != 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . " OG " . $aListTeens[$aInputArray[2]]);
                }
                elseif ($aInputArray[1] != 0 && $aInputArray[2] == 1 && $aInputArray[3] != 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . ' ' . $aListOtherOnes[$aInputArray[1]] . ' ' . $sHundre . " OG " . $aListTeens[$aInputArray[3]]);
                }
                elseif ($aInputArray[1] != 0 && $aInputArray[2] > 1 && $aInputArray[3] != 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . ' ' . $aListOtherOnes[$aInputArray[1]] . ' ' . $sHundre . " OG " . $aListTens[$aInputArray[2]] . $aListOnes[$aInputArray[3]]);
                }
                elseif ($aInputArray[1] != 0 && $aInputArray[2] == 0 && $aInputArray[3] != 0)
                {
                    $sOutput = ('' . $aListOtherOnes[$aInputArray[0]] . ' ' . $sTusen . ' ' . $aListOtherOnes[$aInputArray[1]] . ' ' . $sHundre . " OG " . $aListOnes[$aInputArray[3]]);
                }
                else 
                {
                    $sOutput = $feil;
                }
                break;
            // Når input-string har 5 tegn (5-sifra tall):
            case 4:
                // Lager en liste $aOutputArray med tre tomme stringer som skal brukes til utskrift av resultat og fylles ut via kriterier definert i IF-setningene under
                $aOutputArray = array('' , '' , '');
                // Når tallet på tusen-plassen er 0 defineres første element i $aOutputArray som "XX TUSEN" 
                // hvor XX er definert via lista over tiere "TI, TJUE, ... ÅITI, NITTI".
                if ($aInputArray[0] > 0 && $aInputArray[1] == 0)
                {
                    $aOutputArray[0] = ('' . $aListTens[$aInputArray[0]] . ' ' . $sTusen . ' ');
                    // Når tallet på hundre-plassen er større enn 0 defineres andre element i $aOutputArray som "XX HUNDRE"
                    // hvor XX er definert via lista "ETT, TO, ... NI, TI".
                    if ($aInputArray[2] > 0)
                    {
                        $aOutputArray[1] = ('' . $aListOtherOnes[$aInputArray[2]] . ' ' . $sHundre . ' ');
                        // Når tallet på tier-plassen er 0 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "EN, TO, ... , ÅTTE, NI". 
                        if ($aInputArray[3] == 0 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[3] = ('OG ' . $aListOnes[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "..., ELLEVE, TOLV, ... , ATTEN, NITTEN".
                        elseif ($aInputArray[3] == 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTeens[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 0 og tallet på enerplassen er 0 så defineres tredje element i $aOutputArray
                        // via lista "TI, TJUE, ... ÅTTI, NITTI".
                        elseif ($aInputArray[3] > 0 && $aInputArray[4] == 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via listene "..., TJUE, TRETTI, ... ÅTTI, NITTI" + "EN, TO, ... , ÅTTE, NI".
                        elseif ($aInputArray[3] > 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]] . $aListOnes[$aInputArray[4]]);
                        }
                    }
                    // Når tallet på hundre-plassen er 0 forblir andre element i $aOutputArray tomt
                    else
                    {
                        // Når tallet på tier-plassen er 0 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "EN, TO, ... , ÅTTE, NI" (med ordet "OG" foran).
                        if ($aInputArray[3] == 0 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListOnes[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 0 og tallet på enerplassen er 0 så defineres tredje element i $aOutputArray
                        // via lista "TI, TJUE, ... , ÅTTI, NITTI" (med ordet "OG" foran).
                        elseif ($aInputArray[3] > 0 && $aInputArray[4] == 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]]);
                        }
                        // Når tallet på tier-plassen er 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "ELLEVE, TOLV, ... , TRETTEN, FJORTEN" (med ordet "OG" foran).
                        elseif ($aInputArray[3] == 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTeens[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via listene "TJUE, TRETTI, ... , ÅTTI, NITTI" + "EN, TO, ... , ÅTTE, NI" (med ordet "OG" foran).
                        elseif ($aInputArray[3] > 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]] . $aListOnes[$aInputArray[4]]);
                        }
                    }
                }
                // Når tallet på titusen-plassen er 1 og tallet på tusenplassen er større enn 0 defineres første element i $aOutputArray 
                // som "XX TUSEN" hvor XX er definert via lista  "TI, ELLEVE, TOLV, ... ATTEN, NITTEN".
                elseif ($aInputArray[0] == 1 && $aInputArray[1] > 0)
                {
                    $aOutputArray[0] = ('' . $aListTeens[$aInputArray[1]] . ' ' . $sTusen . ' ');
                    // Når tallet på hundre-plassen er større enn 0 defineres andre element i $aOutputArray som "XX HUNDRE"
                    // hvor XX er definert via lista "ETT, TO, ... NI, TI".
                    if ($aInputArray[2] > 0)
                    {
                        $aOutputArray[1] = ('' . $aListOtherOnes[$aInputArray[2]] . ' ' . $sHundre . ' ');
                        // Når tallet på tier-plassen er 0 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "EN, TO, ... , ÅTTE, NI". 
                        if ($aInputArray[3] == 0 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[3] = ('OG ' . $aListOnes[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "..., ELLEVE, TOLV, ... , ATTEN, NITTEN".
                        elseif ($aInputArray[3] == 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTeens[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er 0 så defineres tredje element i $aOutputArray
                        // via lista "TI, TJUE, ... ÅTTI, NITTI".
                        elseif ($aInputArray[3] > 1 && $aInputArray[4] == 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via listene "..., TJUE, TRETTI, ... ÅTTI, NITTI" + "EN, TO, ... , ÅTTE, NI".
                        elseif ($aInputArray[3] > 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]] . $aListOnes[$aInputArray[4]]);
                        }
                    }
                    // Når tallet på hundre-plassen er 0 forblir andre element i $aOutputArray tomt
                    else
                    {
                        // Når tallet på tier-plassen er 0 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "EN, TO, ... , ÅTTE, NI" (med ordet "OG" foran).
                        if ($aInputArray[3] == 0 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListOnes[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 0 og tallet på enerplassen er 0 så defineres tredje element i $aOutputArray
                        // via lista "TI, TJUE, ... , ÅTTI, NITTI" (med ordet "OG" foran).
                        elseif ($aInputArray[3] > 0 && $aInputArray[4] == 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]]);
                        }
                        // Når tallet på tier-plassen er 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "ELLEVE, TOLV, ... , TRETTEN, FJORTEN" (med ordet "OG" foran).
                        elseif ($aInputArray[3] == 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTeens[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via listene "TJUE, TRETTI, ... , ÅTTI, NITTI" + "EN, TO, ... , ÅTTE, NI" (med ordet "OG" foran).
                        elseif ($aInputArray[3] > 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]] . $aListOnes[$aInputArray[4]]);
                        }
                    }
                }
                // Når tallet på titusen-plassen er større enn 1 og tallet på tusenplassen er større enn 0 defineres første element i $aOutputArray 
                // som "XX TUSEN" hvor XX er definert via lista  "TI, ELLEVE, TOLV, ... ATTEN, NITTEN".
                elseif ($aInputArray[0] > 1 && $aInputArray[1] != 0)
                {
                    $aOutputArray[0] = ('' . $aListTens[$aInputArray[0]] . $aListOnes[$aInputArray[1]] .' ' . $sTusen . ' ');
                    // Når tallet på hundre-plassen er større enn 0 defineres andre element i $aOutputArray som "XX HUNDRE"
                    // hvor XX er definert via lista "ETT, TO, ... NI, TI".
                    if ($aInputArray[2] > 0)
                    {
                        $aOutputArray[1] = ('' . $aListOtherOnes[$aInputArray[2]] . ' ' . $sHundre . ' ');
                        // Når tallet på tier-plassen er 0 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "EN, TO, ... , ÅTTE, NI". 
                        if ($aInputArray[3] == 0 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[3] = ('OG ' . $aListOnes[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "..., ELLEVE, TOLV, ... , ATTEN, NITTEN".
                        elseif ($aInputArray[3] == 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTeens[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er 0 så defineres tredje element i $aOutputArray
                        // via lista "TI, TJUE, ... ÅTTI, NITTI".
                        elseif ($aInputArray[3] > 1 && $aInputArray[4] == 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via listene "..., TJUE, TRETTI, ... ÅTTI, NITTI" + "EN, TO, ... , ÅTTE, NI".
                        elseif ($aInputArray[3] > 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]] . $aListOnes[$aInputArray[4]]);
                        }
                    }
                    // Når tallet på hundre-plassen er 0 forblir andre element i $aOutputArray tomt
                    else
                    {
                        // Når tallet på tier-plassen er 0 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "EN, TO, ... , ÅTTE, NI" (med ordet "OG" foran).
                        if ($aInputArray[3] == 0 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListOnes[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 0 og tallet på enerplassen er 0 så defineres tredje element i $aOutputArray
                        // via lista "TI, TJUE, ... , ÅTTI, NITTI" (med ordet "OG" foran).
                        elseif ($aInputArray[3] > 0 && $aInputArray[4] == 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]]);
                        }
                        // Når tallet på tier-plassen er 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "ELLEVE, TOLV, ... , TRETTEN, FJORTEN" (med ordet "OG" foran).
                        elseif ($aInputArray[3] == 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTeens[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via listene "TJUE, TRETTI, ... , ÅTTI, NITTI" + "EN, TO, ... , ÅTTE, NI" (med ordet "OG" foran).
                        elseif ($aInputArray[3] > 1 && $aInputArray[4] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[3]] . $aListOnes[$aInputArray[4]]);
                        }
                    }
                }
                // Skriver ut en feilmelding dersom input-tallet er 5-sifra uten å være tatt hensyn til av noen av IF-setningen i case 4.
                else
                {
                    $aOutputArray[0] = $feil;
                }
                $sOutput = ('' . $aOutputArray[0] . $aOutputArray[1] . $aOutputArray[2] . $aOutputArray[3] . $aOutputArray[4]);
                break;
            // Når input-string har 6 tegn (5-sifra tall):
            case 5:
                // Lager en liste $aOutputArray med tre tomme stringer som skal brukes til utskrift av resultat og fylles ut via kriterier definert i IF-setningene under
                $aOutputArray = array('' , '' , '');
                // Når tallene på titusen-plassen og tusen-plassen er 0 defineres første element i $aOutputArray 
                // som "X HUNDRE TUSEN" hvor X er definert via lista  "ETT, TO, ... , ÅTTE , NI" utifra input-verdien på hundretusen-plassen.
                if ($aInputArray[1] == 0 && $aInputArray[2] == 0)
                {
                    $aOutputArray[0] = ('' . $aListOnes[$aInputArray[0]] . ' ' . $sHundre . ' ' . $sTusen . ' ');
                    // Når tallet på hundre-plassen er større enn 0 defineres andre element i $aOutputArray som "XX HUNDRE"
                    // hvor XX er definert via lista "ETT, TO, ... NI, TI".
                    if ($aInputArray[3] > 0)
                    {
                        $aOutputArray[1] = ('' . $aListOtherOnes[$aInputArray[3]] . ' ' . $sHundre . ' ');
                        // Når tallet på tier-plassen er 0 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "EN, TO, ... , ÅTTE, NI". 
                        if ($aInputArray[4] == 0 && $aInputArray[5] > 0)
                        {
                            $aOutputArray[3] = ('OG ' . $aListOnes[$aInputArray[5]]);
                        }
                        // Når tallet på tier-plassen er 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "..., ELLEVE, TOLV, ... , ATTEN, NITTEN".
                        elseif ($aInputArray[4] == 1 && $aInputArray[5] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTeens[$aInputArray[5]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er 0 så defineres tredje element i $aOutputArray
                        // via lista "TI, TJUE, ... ÅTTI, NITTI".
                        elseif ($aInputArray[4] > 1 && $aInputArray[5] == 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via listene "..., TJUE, TRETTI, ... ÅTTI, NITTI" + "EN, TO, ... , ÅTTE, NI".
                        elseif ($aInputArray[4] > 1 && $aInputArray[5] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[4]] . $aListOnes[$aInputArray[5]]);
                        }
                    }
                    // Når tallet på hundre-plassen er 0 forblir andre element i $aOutputArray tomt
                    else
                    {
                        // Når tallet på tier-plassen er 0 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "EN, TO, ... , ÅTTE, NI" (med ordet "OG" foran).
                        if ($aInputArray[4] == 0 && $aInputArray[5] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListOnes[$aInputArray[5]]);
                        }
                        // Når tallet på tier-plassen er større enn 0 og tallet på enerplassen er 0 så defineres tredje element i $aOutputArray
                        // via lista "TI, TJUE, ... , ÅTTI, NITTI" (med ordet "OG" foran).
                        elseif ($aInputArray[4] > 0 && $aInputArray[5] == 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[4]]);
                        }
                        // Når tallet på tier-plassen er 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via lista "ELLEVE, TOLV, ... , TRETTEN, FJORTEN" (med ordet "OG" foran).
                        elseif ($aInputArray[4] == 1 && $aInputArray[5] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTeens[$aInputArray[5]]);
                        }
                        // Når tallet på tier-plassen er større enn 1 og tallet på enerplassen er større enn 0 så defineres tredje element i $aOutputArray
                        // via listene "TJUE, TRETTI, ... , ÅTTI, NITTI" + "EN, TO, ... , ÅTTE, NI" (med ordet "OG" foran).
                        elseif ($aInputArray[4] > 1 && $aInputArray[5] > 0)
                        {
                            $aOutputArray[2] = ('OG ' . $aListTens[$aInputArray[4]] . $aListOnes[$aInputArray[5]]);
                        }
                    }
                }
                // Når tallet på titusen-plassen er 0 og tallet på tusen-plassen er større enn 0 defineres første element i $aOutputArray 
                // som "X HUNDRE OG Y TUSEN" hvor X er definert via lista  "ETT, TO, ... , ÅTTE , NI" utifra input-verdien på hundretusen-plassen 
                // og Y er definert via lista  "EN, TO, ... , ÅTTE , NI" utifra verdien på tusen-plassen.
                elseif ($aInputArray[1] == 0 && $aInputArray[2] > 0)
                {
                    $aOutputArray[0] = ('' . $aListOnes[$aInputArray[0]] . ' ' . $sHundre . ' OG ' . $aListOnes[$aInputArray[2]] . ' ' . $sTusen . ' '); 
                }
                // Når tallet på titusen-plassen er større enn 0 og tallet på tusen-plassen er 0 defineres første element i $aOutputArray 
                // som "X HUNDRE OG Y TUSEN" hvor X er definert via lista  "ETT, TO, ... , ÅTTE , NI" utifra input-verdien på hundretusen-plassen 
                // og Y er definert via lista  "TI, TJUE, ... , ÅTTI , NITTI" utifra verdien på titusen-plassen.
                elseif ($aInputArray[1] > 0 && $aInputArray[2] == 0)
                {
                    $aOutputArray[0] = ('' . $aListOnes[$aInputArray[0]] . ' ' . $sHundre . ' OG ' . $aListTens[$aInputArray[1]] . ' ' . $sTusen . ' '); 
                }
                // Når tallet på titusen-plassen er 1 og tallet på tusen-plassen er større enn 0 defineres første element i $aOutputArray 
                // som "X HUNDRE OG Y TUSEN" hvor X er definert via lista  "ETT, TO, ... , ÅTTE , NI" utifra input-verdien på hundretusen-plassen 
                // og Y er definert via lista  "ELLEVE, TOLV, ... , ATTEN, NITTEN" utifra verdien på titusen-plassen.
                elseif ($aInputArray[1] == 1 && $aInputArray[2] > 0)
                {
                    $aOutputArray[0] = ('' . $aListOnes[$aInputArray[0]] . ' ' . $sHundre . ' OG ' . $aListTeens[$aInputArray[2]] . ' ' . $sTusen . ' '); 
                }
                // Når tallet på titusen-plassen er større enn 1 og tallet på tusen-plassen er større enn 0 defineres første element i $aOutputArray 
                // som "X HUNDRE OG YZ TUSEN" hvor X er definert via lista  "ETT, TO, ... , ÅTTE , NI" utifra input-verdien på hundretusen-plassen 
                // og Y er definert via listen  "TJUE, TRETTI, ... ÅTTI, NITTI" utifra verdien på titusen-plassen og Z er definert via lista 
                // "EN, TO, ... , ÅTTE, NI" utifra verdien på tusen-plassen.
                elseif ($aInputArray[1] > 1 && $aInputArray[2] > 0)
                {
                    $aOutputArray[0] = ('' . $aListOnes[$aInputArray[0]] . ' ' . $sHundre . ' OG ' . $aListTens[$aInputArray[1]] . $aListOnes[$aInputArray[2]] . ' ' . $sTusen . ' '); 
                }
                else
                {
                    $sOutput = $feil;
                }
                $sOutput = ('' . $aOutputArray[0] . $aOutputArray[1] . $aOutputArray[2] . $aOutputArray[3] . $aOutputArray[4] . $aOutputArray[5]);
                break;
            case 6:
                if ($aInputArray[0] == 1 && $aInputArray[1] == 0 && $aInputArray[2] == 0 && $aInputArray[3] == 0 && $aInputArray[4] == 0 && $aInputArray[5] == 0 && $aInputArray[6] == 0)
                {
                    $sOutput = ('' . 'EN MILLION');
                }
                else
                {
                    $sOutput = $feil;
                }
                break;
            default:
                $sOutput = $feil;
                break;
        }
    }
    print_r("InputArray etter løkke : ");
    print_r($aInputArray);
    print_r("OutputArray: ");
    print_r($aOutputArray);
    return $sOutput;
}
?>
