# README.md
ヾ(≧▽≦*)o

..... (¯`v´¯)♥
.......•.¸.•´
....¸.•´
... (
☻/
/▌♥♥
/ \ ♥♥

edit "C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Default\Views\MainMenu\Window.xml"

&lt;?xml version="1.0" encoding="UTF-8" standalone="yes" ?&gt;
&lt;!-- $Change: 600955 $ (must be within the first 200 characters of the file) --&gt;

&lt;Root fadein_duration = "0"
      fadeout_duration = "0"
      viewslide_duration = "0"
      viewfade_duration = "0"
      alpha = "0"
      /&gt;

and make the file read-only
then delete "C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Default\Views\MainMenu\Window.bxml"
edit "C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Default\Views\MainMenu\Options.xml"
search for the line "gmlevel=-1" and remove it so the line becomes
       &lt;OptionSubGroup title="&amp;lt;localized token=MainMenu_Options_Debug /&amp;gt;"&gt;
and make it read-only
then delete "C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Default\Views\MainMenu\Options.bxml"
(the .bxml files are generated after the .xml files are read. That's why, after the edit it is good to let it actualize it directly. At least many of the edits I did in the .xml only took place after I deleted the .bxml file of the same name before the extension-type. So, that might be the reason why!)

##The only application needed to set to the compatability-mode settings listed below is ClientPatcher.exe,
unless you're starting it from a shortcut then on it's file properties those must be set too for being safe:
Rightclick on "ClientPatcher.exe"
Click Send To and Create shortcut (to desktop)
Rightclick on it there and open Properties
Set Advanced =&gt; "Run as administrator"
Set Run: "Maximized"
Click on Apply
stay there
Go to Compatability tab rightern of the opn Shortcut tab.
CHANGE SETTINGS FOR ALL USERS
It's absolutely required that the game gets initialized/started by using then either the shortcut or the **ClientPatcher.exe** itself.
If you're starting it from **Steam**, or an other **.exe** like **PatcherSetup.exe**, then it won't work unless you set there the settings too.
If you initialize SWL by **ClientPatcher.exe**, all settings of compatability-mode and such will be taken-over to the starting **SecretWorldLegends.exe** / **SecretWorldLegendsDX11.exe** -, that is why!
...
##++ How to fix DX11-crashing! ++
**Rightclick** on the applications mentioned:
**Rightclick** =&gt; **Properties** =&gt; **Compatability**...
**"C:\Program Files (x86)\Funcom\Secret World Legends\ClientPatcher.exe"**
~~"C:\Program Files (x86)\Funcom\Secret World Legends\PatcherSetup.exe"~~
~~"C:\Program Files (x86)\Funcom\Secret World Legends\SecretWorldLegends.exe"~~
~~"C:\Program Files (x86)\Funcom\Secret World Legends\SecretWorldLegendsDX11.exe"~~
**"C:\Program Files (x86)\Funcom\The Secret World\ClientPatcher.exe"**
~~"C:\Program Files (x86)\Funcom\The Secret World\TheSecretWorld.exe"~~
~~"C:\Program Files (x86)\Funcom\The Secret World\TheSecretWorldDX11.exe"~~
##... Why?
...
##Right now, I'm testing the newest NVIDIA driver! ! ! https://www.nvidia.com/download/driverResults.aspx/170799/en-us
Both games running. Seem nice. Let's wait till midnight.
**Result: flawless.**
...
##[2021-02-21 16:32:07Z #0] [ID:0] [HTTPManager] Download succeeded but write to disk failed C:\Program Files (x86)\Funcom\Secret World Legends\PatcherSetup.exe
from "C:\Program Files (x86)\Funcom\Secret World Legends\Patcher.log"
This happens when your **PatcherSetup.exe** was corrupted, you did RepairRDB, it was redownloaded and you started the game without administrative privilege.
https://cdn.discordapp.com/attachments/727535320589009068/812654368813482005/unknown.png
Repair RDB in case you might still crash with "**Rightclick on ClientPatcher.exe**" and "**Run as administrator**" to be sure it works.
Running the game with administrative permissions allows to overwrite files that might be protected.
The game restarts, closes and stuff while updates and every here and there: has the other app not the privilege, see the list of apps, the apps depending on this one will crash too.
...
##Attention, citizens! O= ò.ó
Warning: Tweaking Registry makes very addictive.
Did you know this folder already?
If you create a new folder on your desktop or anywhere and name it
**GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}**
it becomes a folder that contains all tasks of biblic proportions!
**LocalConfigXML.7z** is the one that sometimes SWL deletes and can't start.
**NVIDIA -Profile- Inspector.7z** is the NVIDIA Developer Tool -, superior to the common NVIDIA console.
**MajorGeeks Windows Tweaks.7z** is https://www.majorgeeks.com/files/details/majorgeeks_registry_tweaks.html
**MMC.7z** is the following picture...
**FiveAliveTeamGUI.7z** is the mentioned mod for making combat show who gets attacked and target team members just by moving the cursor onto the team window member.
**GuildListPerformanceFix.7z** is the mentioned mod from the community for VFE Friendlist Crash-Fix.
...
https://www.curseforge.com/tsw/tsw-mods
https://www.curseforge.com/swlegends/tswl-mods
...
## The Basics... any Q&amp;A, thus your light in the darkness. =)
**FatherDuffy'sFightClub** - https://fdfc.info
**SWLAgentNetworkExplained** - https://www.tswdb.com/agent-network/agent-network-master-guide
**SWLAgentsSpreadsheet** - https://docs.google.com/spreadsheets/d/1dyVfabthDrR67g5zzsm5jI4GlAT2edMTnvezmdc0DFw
**SWLBeginnerGuide** - https://www.tswdb.com/miscellaneous/the-ultimate-beginner-guide/
**SWLChampions** - https://www.tswdb.com/miscellaneous/champions/champion-list
**SWLCommands** - http://legacy.tswdb.com/miscellaneous/chat-commands
**SWLDatabase** - https://www.tswdb.com
**SWLGear&amp;Theorycrafting** - https://docs.google.com/spreadsheets/d/1HVgBeFTbXH0eZ5dJVtzXXm6HyITMHLUyM8avntoPOSI
**SWLMarket** - https://swlmarket.azurewebsites.net
**SWLLeaderbords** - https://leaderboards.secretworldlegends.com
**SWLLegends** - https://www.tswdb.com/legends/
**SWLLegends** - https://wiki.crygaia.org/view/Category:Legends
**SWLMuseum** - https://www.tswdb.com/miscellaneous/museum-of-the-occult/museum-of-the-occult-master-guide
**SWLScripts** - http://legacy.tswdb.com/miscellaneous/chat-scripts
**SWLReddit** - https://www.reddit.com/r/SecretWorldLegends/
**The Orochi Group** - http://orochi-group.com
**TSWDatabase** - http://legacy.tswdb.com
**TSWHowToTank** - https://www.reddit.com/comments/6obo4h ~ PLEASE BE WARNED: This tanking thread contains what the tanking-role was before the patch that just happened. I will let it stay here with a TSW-flag (huh?) and put it later in some sort of Legacy-store
...
##InGame modding..., the dedicated mySWL! :O
... mods must be put as unpacked folders with ONLY the files of the mod inside into:
"C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Custom\Flash"
... for example:
if it's the mod "CLICKABLE NAMETAGS" then install it this way...
"C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Custom\Flash\ClickableNametags\CharPrefs.bxml"
"C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Custom\Flash\ClickableNametags\CharPrefs.xml"
"C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Custom\Flash\ClickableNametags\ClickableNametags.swf"
"C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Custom\Flash\ClickableNametags\Modules.bxml"
"C:\Program Files (x86)\Funcom\Secret World Legends\Data\Gui\Custom\Flash\ClickableNametags\Modules.xml"
... In the downloaded package of clickable nametags was just a folder with those five files, but if the folder was into a folder and then the five files were inside... then DONT copy it this way into the Flash folder. It must ALWAYS be ONE FOLDER with FILES DIRECTLY INSIDE. Yes, there's mod authors that pack a folder into the zipped/packed folder in where the folder is a new folder with the files..., silly. Won't make the mod work.
Additionally, be aware that it is possible to edit the files. The mod Meeehrpack has **AutoSprint.swf** and **AutoPet.swf** inside... if you DELETE or... simply take the **AutoPet.swf** out of the mod and just put the other files into the Flash Meeehrpack folder, **AutoSprint.swf** will work coz it is inside but **AutoPet.swf** will not be used. I personally recommend removing/deleting **AutoPet.swf** coz it likes to make trouble or annoyance sometimes.
...
##Personal recommendations:
**AgentTweaks** - https://swl.curseforge.com/projects/agenttweaks
**ClickableNametags** - https://swl.curseforge.com/projects/clickablenametags
**EmpowermentHelper** - https://swl.curseforge.com/projects/empowerment-helper
**Meeehrpack** - https://tsw.curseforge.com/projects/swl-meeehrpack
**Valyrie'sFriendsEnhanced** - https://tsw.curseforge.com/projects/vfe
...
##Furthermore, appreciated by the community:
**AgentSwitcher** - https://github.com/SecretFox/AgentSwitcher/releases
**AgentViewer** - https://swl.curseforge.com/projects/agentviewer
**AutoRepair** - https://swl.curseforge.com/projects/auto-repair
**Don'tMakeMeWait** - https://www.curseforge.com/tsw/tsw-mods/dont-make-me-wait
**EffectsUI** - https://www.curseforge.com/swlegends/tswl-mods/swl-effects-ui-legends
**LairTracker** - https://www.curseforge.com/swlegends/tswl-mods/lairtracker
**Lorehound** - https://swl.curseforge.com/projects/lorehound
**MobMarkers** - https://swl.curseforge.com/projects/mobmarkers
**Personal Space Soon** - https://github.com/theckhd/ALIA/releases
**SWLact** - https://swl.curseforge.com/projects/tswact # https://advancedcombattracker.com/download.php
**SWLLassie'sWaypoints** - https://www.curseforge.com/swlegends/tswl-mods/lassies-waypoints
**TradepostUtility** - https://swl.curseforge.com/projects/tradepost-utility
...
##Experimental section..., ... any misconfiguration can eradicate your soft- &amp;/or hardware. ò.ó
**Commands_GUI_Guide** - https://guidescroll.com/2012/07/the-secret-world-chat-commands-and-gui-guide/
**7zip** - https://www.7-zip.org/download.html
**AAexplained** - https://www.tomshardware.com/reviews/anti-aliasing-nvidia-geforce-amd-radeon,2868.html
**BCDEDITpcisettings** - https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/bcdedit--set
**directx_Jun2010_redist** - https://www.microsoft.com/en-us/download/details.aspx?id=8109
**ExplainingComputers** - https://www.youtube.com/user/ExplainingComputers / https://www.explainingcomputers.com/
**Firmware&amp;Maintenance** - https://www.station-drivers.com
**LinusTechTips** - https://www.youtube.com/user/LinusTechTips
**NVIDIAdriverQuery** - https://www.nvidia.de/Download/Find.aspx?lang=en
**NvidiaProfileInspector** - https://pcgamingwiki.com/wiki/Nvidia_Profile_Inspector
**Pastebin** - https://pastebin.com/u/Nilt
**pciLookup** - https://www.pcilookup.com
**PostProcessAA** - https://reshade.me
**Techquickie** - https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q
~ in loving memory of **KeeperOfTime** https://forums.funcom.com/t/in-memory-of-keeperoftime/46438
...
##The following section contains on-going edits.
https://nvidia.custhelp.com/app/answers/detail/a_id/2227/~/will-running-physx-on-a-gpu-slow-down-gaming-performance%3F
"/chat join Sanctuary" "/chat beitreten Sanctuary" "/chat jouer... ? Sanctuary" and explaining the VFE-fix. Furthermore, Chat Fonts maybe but uhm... shortcuts CTRL + SHIFT + F1, the reload of text by ON/OFF channel and probably TaskManager Priority High, Discord High Priority / Overlay / Hardware Acceleration differences and impact of Reduced Motion and Sync To Computer... i already see it's too much for today. Yeah.
how do you copy the chat?
/setoption ScreenBrightness 1
/setoption ScreenContrast 1
/setoption ScreenGamma 1
/setoption RenderSetting_ViewDistance -1
/chat join Event
/chat join Sanctuary
/reloadui
/(set)option(einstellen) ScreenContrast 1.25 eliminates graytones/fog
/(set)option(einstellen) RenderSetting_ViewDistance -1 enhances depth-clarity... pictures will be shown soon. It can only be reverted by ... well, for sure a SWL restart. IDC right now.
/(set)option(einstellen) SplashScreenFadeInTime 0 ... tis the teleportation UI fade in time... means: how fast you see NOT ONLY YOUR REALTIME VIDEO... uhm... when you press CTRL + Y or CTRL + Z you see the video without ui... yes... how fast this goes active when you zone. The Opposite is to the Fade Out time. I recommend both at 0, work great. It lags shortly. Some say the lag is gone if it is 0.025 or 0.25 as DON'T MAKE ME WAIT MOD do, but... ... i don't care. Try yourself. Too unfocussed now to check. This is a sudden changelog. To be checked.
/(set)option(einstellen) SplashScreenFadeOutTime 0
WHAT IS MY CURRENT VALUE?
INPUT
command without value to see it.
/setoption ScreenBrightness
[05:28] Variable &lt;ScreenBrightness&gt; is &lt;0.500000&gt;
"C:\Program Files (x86)\Funcom\Secret World Legends\scripts"
"C:\Program Files (x86)\Funcom\Secret World Legends\scripts\auto_login"
"C:\Program Files (x86)\Funcom\Secret World Legends\scripts\auto_teleport"
https://docs.google.com/spreadsheets/d/1HVgBeFTbXH0eZ5dJVtzXXm6HyITMHLUyM8avntoPOSI/edit#gid=0
https://lomsglobal.com/threads/starfoxs-mod-repository.2517/
##! =&gt; This fixes Windows Defender fake-alert
mentioned in https://forums.funcom.com/t/trojan-horse-virus-found-in-swl-patch-from-steam-and-during-installation-using-install-file-from-swl-website/156537/36 but it's up to you how much you want to exclude.
Just for fixing the game exclude your Funcom folder e.g. "C:\Program Files (x86)\Funcom" or if you use **Steam** your "C:\Program Files (x86)\Steam\steamapps\common" folder, OR if using an extern disk the **SteamLibrary** folder there e.g. "D:\SteamLibrary".
Press
**Win + i**
to open your Windows 10 Settings..., then:
https://github.com/spf13/viper
Viper's "They Come And Go"

https://www.curseforge.com/swlegends/tswl-mods/untold-stories-of-the-secret-world
Untold Stories of The Secret World

https://www.curseforge.com/tsw/tsw-mods/eltorqiro_uitweaks
ElTorqiro_UITweaks

&amp; some more:

TSW-mods (partially/full compatible)
https://www.curseforge.com/tsw/tsw-mods

SWL-mods (partially/full compatible)
https://www.curseforge.com/swlegends/tswl-mods

/setoption chat_macro_window 1
/setoption web_browser 1
/gearmanager list
/gearmanager use NAME
/gearmanager save NAME

There's logs in the game directory of different types. Especially important are the ClientLog.txt files, also the ClientLog.txt files in the game directory's **OldLogs** folder. At the end of the log it says why the game crashed or froze, why it lagged under certain conditions and what was being loaded in the game. It can be also adjusted to log more, but logging more does in fact make the game lag more. At least I noticed this difference heavy on my old laptop running 8*2.8GHz. Not a bomb, but a log still having an impact is weird. I must but admit, logging the full content took in half an hour many gigabytes. My Notepad wasn't even capable anymore of opening this huge files so I had to get help from a browser. Yeah. But the default logging is fully enough and capable of tracking down crash reasons. Other files are DownloadErrors.txt and Patcher.log and Chrome_Debug.log and CrashLog.txt and Debug.log and so on. I hope much that you could track down yesterday the crash reason of your game, if not, I'd be happy to support. :blush: **I just started liking you, and don't want you to leave the game directly again, hehe. :D**
In probably worst case scenario, you need to check the Windows **Event Viewer** ```%windir%\system32\eventvwr.msc``` if at the same time of the game other programs exactly in that moment crashed or reported errors. It might be a conflict driver or anything like that -, anything touching critical **.DLL** or other stuff.
:flushed:
I also forgot to ask if you run in **Windowed(Borderless) in DX9-mode** which is like the core of maximum compatability. If nothing else helps, maybe you can get friends with this. DX11 offers more things, but also DX9 often gives much more FPS compared to the small degradation of graphics.
I and I remember on people telling the game crashes when certain types of **V-Sync** are being used... it's been a while since I was on that. There's many types of that, G-Sync, Fast Sync, then this SLI weird feature with NVIDIA for V-Sync which can be good under conditions too, and many many more. Turning the default **Default(On)** to **Force Off** might be worth a try too.

http://tsw.nex4k.net/lairs
