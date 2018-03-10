import React from 'react';
import {
    Drawer,
    DrawerHeader,
    DrawerContent
} from 'rmwc/Drawer';
import { SimpleListItem } from 'rmwc/List';

const ButtonPanel = ({onNewVideoClick, onHelpClick}) => (
    <Drawer permanent>
        <DrawerContent style={{cursor: 'pointer'}} >
            <SimpleListItem graphic="add_circle_outline" text="New Video" onClick={onNewVideoClick} />
            <SimpleListItem graphic="help" text="Help" onClick={onHelpClick} />
        </DrawerContent>
    </Drawer>
)

export default ButtonPanel;