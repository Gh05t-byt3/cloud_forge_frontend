import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


export function CreatVM() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
         <Button className="!rounded" size={"sm"}> New Vm </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-2">
          <DialogHeader>
            <DialogTitle>Add New VM</DialogTitle>
            <DialogDescription>
              Create a new virtual machine by filling out the form below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button size="sm" variant="outline">Cancel</Button>
            </DialogClose>
            <Button size="sm" type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
