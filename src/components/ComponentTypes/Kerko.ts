import {type Node} from '@xyflow/react';
import {ComponentDataType, ImageDataType, HandleDataType, CompInputFieldsBoxType} from '../../types';

export const Kerko: Node = {
    id: '',
    type: 'general-component-type',
    position: { x: 0, y: 0 },
    origin: [0.5, 0.5],
    data: { 
        image: {url:"./Kerko.jpg", width: 52, height: 26} as ImageDataType,
        technicalID: "Kerko",
        name: "compData.Kerko.name",
        description: "compData.Kerko.descriptionShort",
        popover: {
            description: "compData.Kerko.description",
        },
        technicalVersion: 1,
        group: "electronics",
        rotation: 0,
        borderWidth: 2,
        resizableX: false,
        rotatable: true,
        inputFieldsBox: {
            x: 40,
            y: 32,
            borderType: "transparent",
            borderColor: "black",
            borderLineWidth: 0,
            borderRadius: "0%",
            backgroundColor: "transparent",
            rotate180only: true,
        } as CompInputFieldsBoxType,
        selectFields: [
            {
            technicalID: "NominalValue",
            name: "C",
            displayName: false,
            selectedValue: 100,
            unit: "F",
            fieldWidth: 100,
            customImage: false,
            color: "black",
            options: [
                {"value": 1.0, "label": "1.0 nF"},
                {"value": 1.2, "label": "1.2 nF"},
                {"value": 1.5, "label": "1.5 nF"},
                {"value": 1.8, "label": "1.8 nF"},
                {"value": 2.2, "label": "2.2 nF"},
                {"value": 2.7, "label": "2.7 nF"},
                {"value": 3.3, "label": "3.3 nF"},
                {"value": 3.9, "label": "3.9 nF"},
                {"value": 4.7, "label": "4.7 nF"},
                {"value": 5.6, "label": "5.6 nF"},
                {"value": 6.8, "label": "6.8 nF"},
                {"value": 8.2, "label": "8.2 nF"},

                {"value": 10, "label": "10 nF"},
                {"value": 12, "label": "12 nF"},
                {"value": 15, "label": "15 nF"},
                {"value": 18, "label": "18 nF"},
                {"value": 22, "label": "22 nF"},
                {"value": 27, "label": "27 nF"},
                {"value": 33, "label": "33 nF"},
                {"value": 39, "label": "39 nF"},
                {"value": 47, "label": "47 nF"},
                {"value": 56, "label": "56 nF"},
                {"value": 68, "label": "68 nF"},
                {"value": 82, "label": "82 nF"},

                {"value": 100, "label": "100 nF"},
                {"value": 120, "label": "120 nF"},
                {"value": 150, "label": "150 nF"},
                {"value": 180, "label": "180 nF"},
                {"value": 220, "label": "220 nF"},
                {"value": 270, "label": "270 nF"},
                {"value": 330, "label": "330 nF"},
                {"value": 390, "label": "390 nF"},
                {"value": 470, "label": "470 nF"},
                {"value": 560, "label": "560 nF"},
                {"value": 680, "label": "680 nF"},
                {"value": 820, "label": "820 nF"}

            ],
            },
        ],
        handles: [
        {
            borderColor: "black",
            borderLineWidth: 0.8,
            borderRadius: "30%",
            borderType: "dotted",
            description: "Terminal 1",
            functions: [
                "dig_in"
            ],
            height: 4,
            hid: "1",
            name: "1",
            position: "left",
            postype: "left",
            tolVmax: 250,
            tolVmin: 0,
            type: "source",
            Vout: 0,
            width: 10,
            x: 5.5,
            xalign: "start",
            y: 1.8,
            yalign: "start",
            prefferedLineWidth: 1,
        } as HandleDataType,
        {
            borderColor: "black",
            borderLineWidth: 0.8,
            borderRadius: "30%",
            borderType: "dotted",
            description: "Terminal 2",
            functions: [
                "dig_in"
            ],
            height: 4,
            hid: "2",
            name: "2",
            position: "left",
            postype: "left",
            tolVmax: 250,
            tolVmin: 0,
            type: "source",
            Vout: 0,
            width: 10,
            x: 5.5,
            xalign: "start",
            y: 25,
            yalign: "start",
            prefferedLineWidth: 1,
        } as HandleDataType,
        ]
    } as ComponentDataType,
}