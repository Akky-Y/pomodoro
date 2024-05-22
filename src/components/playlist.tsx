import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import type { LofiSettings } from "@/lib/settings";
import { ListVideo } from "lucide-react";
import { useForm } from "react-hook-form";
import useLocalStorageState from "use-local-storage-state";

const defaultValue: LofiSettings = {
  name: "noname",
  volume: 0.2,
  avatarURL: "",
  playlist: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
};

export default function Playlist() {
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
        <Button size="icon" variant="ghost">
          <ListVideo size={26} />
          <span className="sr-only">プレイリスト</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="playlist"
              render={({ field }) => (
                <FormItem>
                  <Label>プレイリスト</Label>
                  <FormControl>
                    <Textarea {...field} />
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
