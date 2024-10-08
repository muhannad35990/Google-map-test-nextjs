import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { FC, ReactElement } from "react"
import { LandmarkDialogProps } from "../types"
import LandmarkCard from "./LandmarkCard"

const LandmarkDialog: FC<LandmarkDialogProps> = ({
  open,
  setOpen
}): ReactElement => {
  const close = () => setOpen({ show: false, data: null })
  return (
    <Drawer open={open.show} onOpenChange={close} onClose={close}>
      <DrawerContent>
        <div className="mx-auto w-full max-h-[calc(90dvh)] overflow-y-auto flex  flex-col items-center">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          {open.data && <LandmarkCard {...open.data} />}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default LandmarkDialog
