import React, { useMemo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Tooltip from '@material-ui/core/Tooltip';
import { ViewsType } from "../../screens/dashboard.screen"

type DrawerListComponentType = {
    onClick: (view: ViewsType) => void
}

const DrawerListItems: {[Key in ViewsType]: JSX.Element} = {
    'Upload': <CloudUploadIcon aria-label="upload" />,
    'Starred': <MailIcon />,
    'Trash': <InboxIcon />
}


export const DrawerList = (props: DrawerListComponentType) => {

    // this is to prevent type widening from string literal to string
    const constructMapOfKeys = useMemo(() => {
        const keys = Object.keys(DrawerListItems)
        const ViewsTypesKeysArray: ViewsType[] = []
        keys.forEach((key: string) => {
            ViewsTypesKeysArray.push(key as ViewsType)
        });
        return ViewsTypesKeysArray
    }, [DrawerListItems])

    return (
        <>
            {constructMapOfKeys.map((view: ViewsType) => {
                    return (
                        <ListItem button key={view} onClick={() => props.onClick(view)}>
                            <ListItemIcon>
                                {DrawerListItems[view]}
                            </ListItemIcon>
                            <ListItemText primary={view} />
                        </ListItem>
                    )
                })
            }
        </>
    )
}