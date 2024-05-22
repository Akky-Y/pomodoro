import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { LofiSettings } from "@/lib/settings";
import { useForm } from "react-hook-form";
import useLocalStorageState from "use-local-storage-state";

const defaultValue: LofiSettings = {
  name: "noname",
  volume: 0.2,
  avatarURL: "",
  playlist: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
};

export default function UserMenu() {
  const [settings, setSettings] = useLocalStorageState<LofiSettings>(
    "lofi-settings",
    {
      defaultValue,
    },
  );

  const form = useForm<LofiSettings>({
    defaultValues: settings || defaultValue,
  });

  const onSubmit = (data: LofiSettings) => {
    setSettings(data);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/74072948?s=400&u=6595e7b3c4583842a53dc9af3d36da8d58757898&v=4" />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label>名前</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="avatarURL"
              render={({ field }) => (
                <FormItem>
                  <Label>アバター画像</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="volume"
              render={({ field }) => (
                <FormItem>
                  <Label>音量</Label>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button>保存</Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
