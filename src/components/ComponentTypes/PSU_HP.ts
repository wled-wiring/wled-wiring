import {type Node, Position} from '@xyflow/react';
import {ComponentDataType, ImageDataType, HandleDataType, CompInputFieldDataType, CompInputFieldsBoxType} from '../../types';

export const PSU_HP: Node = {
    id: '',
    type: 'general-component-type',
    position: { x: 0, y: 0 },
    origin: [0.5, 0.5],
    data: { 
        image: {url:"./PSU_HP.jpg", width: 300, height: 180} as ImageDataType,
        technicalID: "PSU_HP",
        name: "compData.PSU_HP.name",
        description: "compData.PSU_HP.descriptionShort",
        popover: {
            description: "compData.PSU_HP.description",
        },
        technicalVersion: 1,
        group: "psu",
        rotation: 0,
        borderWidth: 2,
        resizableX: false,
        rotatable: true,
        inputFieldsBox: {
            x: 220,
            y: 90,
            borderType: "solid",
            borderColor: "black",
            borderLineWidth: 0,
            borderRadius: "0%",
            backgroundColor: "transparent",
        } as CompInputFieldsBoxType,
        inputFields: [
            {
                technicalID: "source_voltage",
                type: "number_input",
                name: "V",
                value: 5,
                min: 1,
                max: 48,
                step: 0.1,
                unit: "V",
                fieldWidth: 70,
                color: "black"
            } as CompInputFieldDataType,
            {
                technicalID: "source_current",
                type: "number_input",
                name: "I",
                value: 10,
                min: 0,
                max: 100,
                step: 0.1,
                unit: "A",
                fieldWidth: 70,
                color: "black"
            } as CompInputFieldDataType,
        ],
        handles: [
        {
            hid: "Vout1",
            type: "source",
            x: 290,
            y: 34,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "red",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "Vout",
            description: "Vout (#1)",
            functions: ["suppl_out"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        {
            hid: "Vout2",
            type: "source",
            x: 290,
            y: 49,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "red",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "Vout",
            description: "Vout (#2)",
            functions: ["suppl_out"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        {
            hid: "Vout3",
            type: "source",
            x: 290,
            y: 64,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "red",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "Vout",
            description: "Vout (#3)",
            functions: ["suppl_out"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        {
            hid: "GND1",
            type: "source",
            x: 290,
            y: 79,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "black",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "GND",
            description: "GND (#1)",
            functions: ["gnd"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        {
            hid: "GND2",
            type: "source",
            x: 290,
            y: 94,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "black",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "GND",
            description: "GND (#2)",
            functions: ["gnd"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        {
            hid: "GND3",
            type: "source",
            x: 290,
            y: 109,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "black",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "GND",
            description: "GND (#3)",
            functions: ["gnd"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        {
            hid: "PE",
            type: "source",
            x: 291,
            y: 124,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "#ccff33",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "PE",
            description: "Protective earth",
            functions: ["pe"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        {
            hid: "N",
            type: "source",
            x: 291,
            y: 139,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "#005ce6",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "N",
            description: "Neutral 110~V/230~V",
            functions: ["neutral"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        {
            hid: "L",
            type: "source",
            x: 291,
            y: 154,
            xalign: "start",
            yalign: "start",
            width: 12,
            height: 12,
            borderType: "dashed",
            borderColor: "#996600",
            borderLineWidth: 1,
            borderRadius: "20%",
            postype: "right",
            position: Position.Left,
            name: "L",
            description: "Line 110~V/230~V",
            functions: ["line"],
            prefferedLineWidth: 3,
        } as HandleDataType,
        ]
    } as ComponentDataType,
}