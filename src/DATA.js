const simple = [
    {
        nimi        : 'Valkeakoski',
        tunnus      : 'VI',
        km          : 0,
    },
    {
        nimi        : 'Toijala',
        tunnus      : 'TL',
        km          : 18,
    },
    {
        nimi        : 'Hämeenlinna',
        tunnus      : 'HL',
        km          : 58,
    },
    {
        nimi        : 'Lahti',
        tunnus      : 'LH',
        km          : 151,
    },
    {
        nimi        : 'Kouvola',
        tunnus      : 'KV',
        km          : 212,
    },
]

const complex = [
    {
        "nimi": {
            "fi": "Helsinki",
            "sv": "Helsingfors"
        },
        "tunnus": "HKI",
        "km": 0
    },
    {
        "nimi": {
            "fi": "Pasila",
            "sv": "Böle"
        },
        "tunnus": "PSL",
        "km": 3
    },
    {
        "nimi": {
            "fi": "Tikkurila",
            "sv": "Dickursby"
        },
        "tunnus": "TKL",
        "km": 15
    },
    {
        "nimi": {
            "fi": "Kerava",
            "sv": "Kervo"
        },
        "tunnus": "KE",
        "km": 28
    },
    {
        "nimi": "Ainola",
        "tunnus": "AIN",
        "km": 34
    },
    {
        "nimi": {
            "fi": "Järvenpää",
            "sv": "Träskända"
        },
        "km": 36,
        "tunnus": "JP"
    },
    {
        "nimi": "Saunakallio",
        "tunnus": "SAU",
        "km": 38
    },
    {
        "nimi": "Jokela",
        "tunnus": "JK",
        "km": 47
    },
    {
        "nimi": {
            "fi": "Hyvinkää",
            "sv": "Hyvinge"
        },
        "tunnus": "HY",
        "km": 58
    },
    {
        "nimi": "Riihimäki",
        "tunnus": "RI",
        "km": 71
    },
    {
        "nimi": "Ryttylä",
        "tunnus": "RY",
        "km": 80
    },
    {
        "nimi": "Turenki",
        "tunnus": "TU",
        "km": 93
    },
    {
        "nimi": {
            "fi": "Hämeenlinna",
            "sv": "Tavastehus"
        },
        "tunnus": "HL",
        "km": 107
    },
    {
        "nimi": "Parola",
        "tunnus": "PRL",
        "km": 115
    },
    {
        "nimi": "Iittala",
        "tunnus": "ITA",
        "km": 129
    },
    {
        "nimi": "Toijala",
        "tunnus": "TL",
        "km": 147
    },
    {
        "nimi": "Viiala",
        "tunnus": "VIA",
        "km": 154
    },
    {
        "nimi": "Lempäälä",
        "tunnus": "LPÄ",
        "km": 165
    },
    {
        "nimi": {
            "fi": "Tampere",
            "sv": "Tammerfors"
        },
        "tunnus": "TPE",
        "km": 187
    }
]

export default {
    "numero": 1948,
    "tunnus": "MUS",
    "paiva": "31.12.2017",
    "paluujunat": [
        1949
    ],
    "hinnoittelukaava": {
        "perushinta": 10,
        "kmhinta": 0.3
    },
    "pysahdykset": complex,
    "hinnasto": {
        "Aikuinen": {
            "HY-RI": 10
        },
        "Lapsi": {
            "HY-RI": 5
        }
    }
}
